; highlights.scm

; Comments
(_comment) @comment

; Block / division keywords
[
  (_target)
  (_define)
  (_setup)
  (_select)
  (_sort)
  (_letter)
  (_print)
  (_procedure)
] @keyword

; Control flow
[
  (_if)
  (_then)
  (_else)
  (_do)
  (_end)
  (_for)
  (_to)
  (_by)
  (_while)
  (_until)
  (_each)
  (_with)
  (_every)
  (_starting)
] @keyword.control

; Logical operators
[
  (_and)
  (_or)
  (_not)
] @keyword.operator

; Mode keywords
[
  (_accountchange)
  (_acs)
  (_atmdialog)
  (_audio)
  (_batch)
  (_cardcreationwizard)
  (_certificate)
  (_checkdisbursedwizard)
  (_collection)
  (_customforms)
  (_customformswindows)
  (_demand)
  (_excpitem)
  (_homebanking)
  (_mcw)
  (_mcwinteractive)
  (_stateless)
  (_subroutine)
  (_symconnect)
  (_validation)
  (_windows)
  (_windowsprint)
] @keyword

; Print / formatting keywords
[
  (_newline)
  (_newpage)
  (_suppress)
  (_suppressnewline)
  (_bell)
  (_blink)
  (_bright)
  (_clearwarning)
  (_setwarning)
  (_header)
  (_headers)
  (_left)
  (_wrap)
] @keyword

; File / I/O keywords
[
  (_datafile)
  (_ascii)
  (_ebcdic)
  (_blocksize)
  (_recordsize)
  (_targetfile)
  (_formlength)
] @keyword

; Dialog keywords
[
  (_dialogclose)
  (_dialogdisplay)
  (_dialogendgroupbox)
  (_dialogendgrouping)
  (_dialogintrotext)
  (_dialognewcolumn)
  (_dialogpromptcomboend)
  (_dialogpromptlistend)
  (_dialogstartgrouping)
  (_dialogtextlistend)
] @keyword

; Data action keywords
[
  (_call)
  (_create)
  (_change)
  (_delete)
  (_modify)
  (_set)
] @keyword

; Other language keywords
[
  (_include)
  (_account)
  (_across)
  (_afterlast)
  (_beforefirst)
  (_divprojectcalc)
  (_loanprojectcalc)
  (_overdrawavailablecalc)
  (_overdrawavailableinit)
  (_prevsystemdate)
  (_printcontrol)
  (_reportcategory)
  (_uniquekey)
  (_terminate)
  (_none)
  (_labels)
  (_lastaccount)
  (_lastcreate)
  (_lastsequence)
  (_liveinstcheck)
  (_loc)
  (_nonansistandard)
  (_winmessagesend)
  (_winmodetext)
  (_winmodewindows)
] @keyword

; System variables / builtins (sys* keywords)
[
  (_sysactualdate)
  (_sysactualtime)
  (_sysclientnumber)
  (_sysconsolenum)
  (_syshostname)
  (_sysmemomode)
  (_syssymdirectory)
  (_systemdate)
  (_sysusernumber)
  (_syswindowslevel)
] @variable.builtin

; Types
[
  (character_type)
  (date_type)
  (float_type)
  (money_type)
  (number_type)
  (rate_type)
] @type

; Literals
(character) @string
(date) @string.special
(float) @float
(money) @number
(rate) @number
(number) @number

; Operators
(comparison_operator) @operator

(addition_expression "+" @operator)
(subtraction_expression "-" @operator)
(multiplication_expression "*" @operator)
(division_expression "/" @operator)

; Function calls
(function_call
  function: (_) @function)

; Procedure names
(procedure_block
  (identifier) @function)

; Field access: record name and field
(field_access
  record: (record_name) @type
  field: (identifier) @property)

; General identifiers
(identifier) @variable
