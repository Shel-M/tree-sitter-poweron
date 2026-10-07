/**
 * @file TreeSitterPoweron grammar for tree-sitter
 * @author Sheldon M. <mcculloughs@partnercoloradocu.org>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
import records from './records.js';
import {
  boolean,
  control_flow,
  credit_reporting,
  crt,
  datetime,
  demand_ui,
  div_project,
  email,
  file_maintenance,
  file_system,
  ftp,
  get_data,
  get_field,
  html,
  input,
  laser_printer,
  loan_project,
  math,
  mode,
  output,
  overdraw_calc,
  string,
  system,
  transactions,
  type_conversion,
} from './builtin.js';

const groups = [
  boolean,
  control_flow,
  credit_reporting,
  crt,
  datetime,
  demand_ui,
  div_project,
  email,
  file_maintenance,
  file_system,
  ftp,
  get_data,
  get_field,
  html,
  input,
  laser_printer,
  loan_project,
  math,
  mode,
  output,
  overdraw_calc,
  string,
  system,
  transactions,
  type_conversion,
];

const functionTables = groups.map(g => g.functions ?? {});
const keywordTables = groups.map(g => g.keywords ?? {});
const statementTables = groups.map(g => g.statements ?? {});

const functionNames = functionTables.flatMap(t => Object.keys(t));
const functionRules = Object.fromEntries(
  functionNames.map(n => [`${n}_function`, $ => seq($[n], $._function_args)])
);

const keywordNames = keywordTables.flatMap(t => Object.keys(t));

const statementNames = statementTables.flatMap(t => Object.keys(t));
const statementRules = Object.fromEntries(
  statementNames.map(n => [`${n}_statement`, $ => seq($[n], '=', $.expression)])
);

export default grammar({
  name: "poweron",

  externals: $ => [
    $.comment_block
  ],

  extras: $ => [
    /\s/,
    $.comment_block,
  ],

  conflicts: $ => [
    [$.identifier, $.array_access],
    [$.record, $.subrecord],
    [$.if_statement],
  ],

  rules: {
    source_file: $ => repeat(choice(
      $.modes,
      $.target_clause,
      $.define_block,
      $.setup_block,
      $.select_block,
      $.sort_block,
      $.letter_block,
      $.print_block,
      $.procedure_block,
      $.include_statement,
    )),

    ...records,

    ...Object.assign({}, ...functionTables, ...keywordTables, ...statementTables),
    ...functionRules,
    ...statementRules,

    // keywords: $ => choice(...keywordNames.map(n => $[n])),
    _builtin_statements: $ => choice(...statementNames.map(n => $[`${n}_statement`])),

    function_call: $ => seq($.function_name, $._function_args),
    function_name: $ => prec.left(choice(...functionNames.map(n => $[n]))),
    _function_args: $ => prec(1, seq(
      '(',
      optional(commaSep1(choice($.expression, $.record_name))),
      ')',
    )),

    /// Keyword groupings
    modes: $ => prec.right(repeat1($.mode_keyword)),
    mode_keyword: $ => choice(
      $.accountchange,
      $.acs,
      $.atmdialog,
      $.audio,
      $.batch,
      $.cardcreationwizard,
      $.certificate,
      $.checkdisbursedwizard,
      $.collection,
      $.customforms,
      $.customformswindows,
      $.demand,
      $.excpitem,
      $.homebanking,
      $.mcw,
      $.mcwinteractive,
      $.stateless,
      $.subroutine,
      $.symconnect,
      $.validation,
      $.windows,
      $.windowsprint,
    ),

    // The order of the next few sections is based on the edocs `Lexicon` document.

    /// Types
    type_expression: $ => choice(
      $.primitive_type,
      $.array_type,
      $.const_type,
    ),

    primitive_type: $ => choice(
      $.character_type,
      $.date_type,
      $.float_type,
      $.money_type,
      $.number_type,
      $.rate_type,
      $.sized_character_type,
    ),

    character_type: $ => token(/character/i),
    date_type: $ => token(/date/i),
    float_type: $ => token(/float/i),
    money_type: $ => token(/money/i),
    number_type: $ => token(/number/i),
    rate_type: $ => token(/rate/i),
    sized_character_type: $ => seq($.character_type, '(', $.number, ')'),

    array_type: $ => seq(
      $.primitive_type, /array/i, '(', choice($.number, commaSep1($.number)), ')'
    ),

    const_type: $ => $._literal, // Only used in '(define_block (variable_declaration))'

    character: $ => /"[^"]*"/,
    date: $ => /'[\d-]+\/[\d-]+\/[\d-]+'/,
    float: $ => /[+-]?\d+\.\d+([eE][+-]?[\d]+)?/,
    money: $ => /[$][\d,]+(\.\d+)?/,
    rate: $ => /[\d]+\.?[\d]+%/,
    number: $ => prec(0, /[+-]?\d+/),

    _literal: $ => choice(
      $.character,
      $.date,
      $.float,
      $.money,
      $.rate,
      $.number,
    ),

    /// End Types

    /// Divisions

    target_clause: $ => seq(
      $.target,
      '=',
      $.record_name,
    ),

    define_block: $ => seq(
      $.define,
      repeat(choice($.variable_declaration, $.include_statement)),
      $.end
    ),

    setup_block: $ => seq(
      $.setup,
      repeat($.statement),
      $.end,
    ),

    select_block: $ => seq(
      $.select,
      optional($.every),
      choice(
        $.all,
        $.none,
        $.boolean_expression,
      ),
      $.end,
    ),

    sort_block: $ => seq(
      $.sort,
      repeat(choice(
        seq(optional('-'), $.field_access, optional($.subtotal)),
        $.if_statement,
      )),
      $.end,
    ),

    letter_block: $ => seq(
      $.letter,
      $.title_statement,
      repeat($.statement),
      $.end,
    ),

    print_block: $ => seq(
      $.print,
      $.title_statement,
      optional($.reportcategory),
      optional(choice(
        $.print_datafile,
        $.print_labels,
      )),
      repeat($.statement),
      $.end,
    ),

    print_datafile: $ => seq(
      $.datafile,
      choice($.ascii, $.ebcdic),
      $.recordsize,
      $.blocksize,
    ),

    print_labels: $ => seq(
      $.labels,
      $.across,
      $.width,
      $.formlength,
    ),

    procedure_block: $ => seq(
      $.procedure,
      $.identifier,
      repeat($.statement),
      $.end,
    ),

    /// End Devisions

    variable_declaration: $ => seq(
      $.identifier,
      '=',
      $.type_expression,
    ),

    /// Statements
    statement: $ => choice(
      $.assignment_statement,
      $.if_statement,
      $.for_block,
      $.while_block,
      $.do_block,
      $.headers_block,
      $.trailers_block,
      $.fmperform_block,
      $.tranperform_block,

      $.call_statement,
      $.include_statement,
      $.nonansistandard,
      $.terminate,

      $.pullcreditreport,

      $.bell,
      $.blink,
      $.bright,
      $.dim,
      $.stopblink,
      $.enterdelimiter,

      $.dialogclose,
      $.dialogdisplay,
      $.dialogendgroupbox,
      $.dialogendgrouping,
      $.dialogintrotext,
      $.dialognewcolumn,
      $.dialogpromptcomboend,
      $.dialogpromptlistend,
      $.dialogstartgrouping,
      $.dialogtextlistend,
      $.winmessagesend,
      $.winmodetext,
      $.winmodewindows,

      $.divprojectcalc,

      $.htmlviewdisplay,
      $.htmlviewopen,

      $.loanprojectcalc,

      $.print_statement,
      $.col_statement,
      $.printcontrol_statement,
      $.header,
      $.newline,
      $.newpage,
      $.suppress,
      $.suppressnewline,

      $.overdrawavailablecalc,
      $.overdrawavailableinit,

      $.liveinstcheck,
      $.prevsystemdate,
      $.sysactualdate,
      $.sysactualtime,
      $.sysclientnumber,
      $.sysconsolenum,
      $.syshostname,
      $.sysmemomode,
      $.syssymdirectory,
      $.systemdate,
      $.sysusernumber,
      $.syswindowslevel,

      $.function_call,
      $._builtin_statements,
    ),

    assignment_statement: $ => seq(
      $.identifier,
      '=',
      $.expression,
    ),

    call_statement: $ => seq(
      $.call,
      $.identifier,
    ),

    include_statement: $ => seq($.include, $.character),

    do_block: $ => seq(
      $.do,
      repeat($.statement),
      $.end,
    ),

    every: $ => seq($.every, $.number, optional(seq($.starting, $.with, $.number))),

    headers_block: $ => seq(
      $.headers,
      $.statement,
      $.end,
    ),

    trailers_block: $ => seq(
      $.trailers,
      $.statement,
      $.end,
    ),

    for_block: $ => prec.left(seq(
      choice(
        $.for_record,
        $.for_each,
        $.for_each_with,
        $.for_with,
        $.for_,
      ),
      $.statement,
      optional($.until_statement),
    )),

    for_record: $ => seq(
      $.for,
      $.record,
      $.expression
    ),

    for_each: $ => seq(
      $.for,
      $.each,
      $.record_name,
    ),

    for_each_with: $ => seq(
      $.for,
      $.each,
      $.record_name,
      $.with,
      $.boolean_expression
    ),

    for_with: $ => seq(
      $.for,
      $.record_name,
      $.with,
      optional($.with_field),
      choice($.expression, $.uniquekey),
    ),

    for_: $ => seq(
      $.for,
      $.identifier,
      '=',
      $.expression,
      $.to,
      $.expression,
      optional(seq($.by, $.expression))
    ),

    until_statement: $ => seq(
      $.until,
      $.boolean_expression
    ),

    with_field: $ => /[a-z]*( [a-z]*)?/i,

    while_block: $ => seq(
      $.while,
      $.boolean_expression,
      $.statement,
    ),

    fmperform_block: $ => seq(
      $.fmperform,
      choice($.change, $.create, $.revise, $.delete),
      optional($.targetfile),
      $.record, 
      optional(choice($.loc, $.slid)),
      optional(choice($.expression, $.afterlast, $.beforefirst)),

      optional(seq(
        $.subrecord, 
        optional(choice($.loc, $.slid)),
        choice($.expression, $.afterlast, $.beforefirst),

        optional(seq(
          $.bottomrecord, 
          choice($.expression),
        )),
      )),

      '(',
      $.expression,
      ',',
      $.expression,
      ',',
      $.identifier,
      optional(seq(
        ',',
        $.identifier,
      )),
      optional(seq(
        ',',
        $.identifier,
      )),
      ')',

      $.do,
      repeat1($.fmperform_statement),
      $.end,
    ),

    fmperform_statement: $ => choice(
      seq($.set, $.field_name, $.to, $.expression),
      seq($.setwarning, $.expression, $.expression),
      seq($.clearwarning, $.expression),
      seq($.insert, $.into, $.queue),
      seq($.remove, $.from, $.queue),
    ),

    tranperform_block: $ => seq(
      $.tranperform,
      $.trancode,

      '(',
      choice($.number, $.identifier),
      ',',
      $.identifier,
      ',',
      $.identifier,
      ',',
      $.identifier,
      ',',
      $.identifier,
      ',',
      $.identifier,
      ')',

      $.do,
      repeat1($.tranperform_statement),
      $.end,
    ),

    trancode: $ => /[a-z]{1,2}/i,

    tranperform_statement: $ => seq(
      $.set, $.field_name, $.to, $.expression
    ),

    if_statement: $ => seq(
      $.if,
      $.boolean_expression,
      $.then,
      $.statement,
      optional($.else_statement)
    ),

    else_statement: $ => seq(
      $.else,
      $.statement
    ),

    print_statement: $ => seq(
      $.print,
      $.expression,
    ),

    printcontrol_statement: $ => seq(
      $.printcontrol,
      $.expression,
    ),

    col_statement: $ => prec.left(seq(
      $.col,
      '=',
      $.expression,
      optional(choice($.left, $.right, $.wrap)),
      $.expression
    )),
    /// End Statements

    expression: $ => $._additive_expression,

    _additive_expression: $ => choice(
      $.addition_expression,
      $.subtraction_expression,
      $._multiplicative_expression,
    ),

    addition_expression: $ => prec.left(1, seq(
      $._additive_expression,
      '+',
      $._multiplicative_expression,
    )),

    subtraction_expression: $ => prec.left(1, seq(
      $._additive_expression,
      '-',
      $._multiplicative_expression,
    )),

    _multiplicative_expression: $ => choice(
      $.multiplication_expression,
      $.division_expression,
      $._primary_expression,
    ),

    multiplication_expression: $ => prec.left(2, seq(
      $._multiplicative_expression,
      '*',
      $._primary_expression,
    )),

    division_expression: $ => prec.left(2, seq(
      $._multiplicative_expression,
      '/',
      $._primary_expression,
    )),

    _primary_expression: $ => prec(2, choice(
      $._literal,
      $.identifier,
      $.function_call,
      $.field_access,
      seq('(', $.expression, ')'),
    )),

    field_access: $ => seq($.record_name, ':', $.field_name),

    field_ident: $ => token(/[a-z_][a-z0-9_]*/i),
    subfield_access: $ => choice($.number, seq('(', $.expression, ')')),
    field_name: $ => choice(
      $.field_ident,
      seq($.field_ident, ':', $.subfield_access)
    ),

    boolean_expression: $ => choice(
      $.comparison,
      $.function_call,
      seq($.not, $.boolean_expression),
      seq($.any, $.record_name, $.with, $.boolean_expression),
      prec.left(2, seq($.boolean_expression, $.and, $.boolean_expression)),
      prec.left(1, seq($.boolean_expression, $.or, $.boolean_expression)),
      seq('(', $.boolean_expression, ')'),
    ),

    comparison: $ => seq(
      $.expression,
      $.comparison_operator,
      $.expression,
    ),

    comparison_operator: $ => choice('=', '<>', '<', '>', '<=', '>='),

    record_name: $ => prec.left(choice(
      seq($.record, $.subrecord, $.bottomrecord),
      seq($.record, $.subrecord),
      $.record,
    )),

    array_access: $ => seq(
      $._identifier,
      '(',
      optional(commaSep1($.expression)),
      ')',
    ),

    _identifier: $ => token(/[@a-z_][a-z0-9_]*/i),

    identifier: $ => choice(
      $._identifier,
      $.array_access,
    ),
  },
});

function commaSep1(rule) {
  return seq(rule, repeat(seq(',', rule)));
}
