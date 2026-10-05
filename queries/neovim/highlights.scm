; highlights.scm

; Comments
(comment_block) @comment

; General identifiers
(identifier) @variable

; Punctuation
[
 "("
 ")"
] @punctuation.bracket

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
("+" @operator)
("-" @operator)
("*" @operator)
("/" @operator)

; Function calls
(function_call
  (function_name) @function)

; Procedure names
(procedure_block
  (identifier) @function)
(call_statement
  (identifier) @function)

; Field access
(field_access
  (record_name) @type
  (field_name) @property)

;; Keywords and builtins - builtins.js structure

; Boolean
[
  (all)
  (and)
  (any)
  (by)
  (not)
  (or)
] @keyword.operator

; Control flow
[
  (call)
  (define)
  (do)
  (each)
  (else)
  (end)
  (every)
  (for)
  (if)
  (include)
  (none)
  (procedure)
  (select)
  (setup)
  (sort)
  (target)
  (terminate)
  (then)
  (to)
  (until)
  (while)
  (with)

  (whilelimit)
] @keyword.control

; Credit reporting - Labeled as functions to match highlight across the pattern
(pullcreditreport) @function

; CRT
[
  (bell)
  (blink)
  (bright)
  (dim)
  (stopblink)
  (enterdelimiter)
] @keyword

; Datetime - no keywords

; Demand UI - Labeled as functions to match highlight across the pattern
[
  (dialogclose)
  (dialogdisplay)
  (dialogendgroupbox)
  (dialogendgrouping)
  (dialogintrotext)
  (dialognewcolumn)
  (dialogpromptcomboend)
  (dialogpromptlistend)
  (dialogstartgrouping)
  (dialogtextlistend)
] @function

; Dividend projection - Labeled as functions to match highlight across the pattern
(divprojectcalc) @function

; Email - no keywords

; File maintenance
[
  (afterlast)
  (beforefirst)
  (change)
  (clearwarning)
  (create)
  (delete)
  (fmperform)
  (from)
  (insert)
  (into)
  ; (lastaccount)
  (loc)
  (queue)
  (remove)
  (revise)
  (set)
  (setwarning)
  (slid)
  (targetfile)
  (uniquekey)
] @keyword

; File System - no keywords
; FTP - no keywords
; Get Data - no keywords
; Get Field - no keywords

; HTML - Labeled as functions to match highlight across the pattern
[
 (htmlviewdisplay)
 (htmlviewopen)
] @function ; labeled as function to match the other parts of the credit report pattern/construct

; Input - no keywords
; Laser Printer - no keywords

; Loan Project - Labeled as functions to match highlight across the pattern
(loanprojectcalc) @function

; Math - no keywords

; Mode
[
  (accountchange)
  (acs)
  (atmdialog)
  (audio)
  (batch)
  (cardcreationwizard)
  (certificate)
  (checkdisbursedwizard)
  (collection)
  (customforms)
  (customformswindows)
  (demand)
  (excpitem)
  (homebanking)
  (mcw)
  (mcwinteractive)
  (stateless)
  (subroutine)
  (symconnect)
  (validation)
  (windows)
  (windowsprint)
] @keyword

; Output
[
  (ascii)
  (col)
  (datafile)
  (ebcdic)
  (headers)
  (labels)
  (left)
  (letter)
  (newline)
  (newpage)
  (nonansistandard)
  (print)
  (printcontrol)
  (right)
  (starting)
  (suppress)
  (suppressnewline)
  (trailers)
  (wrap)

  (across)
  (blocksize)
  (datasize)
  (formlength)
  (header)
  (recordsize)
  (reportcategory)
  (subtotal)
  (title)
  (total)
  (width)
] @keyword

; Overdraw Calculate
[ 
  (overdrawavailablecalc)
  (overdrawavailableinit)
] @keyword

; String - no keywords

; System
[
  (liveinstcheck)
  (prevsystemdate)
  (sysactualdate)
  (sysactualtime)
  (sysclientnumber)
  (sysconsolenum)
  (syshostname)
  (sysmemomode)
  (prevsystemdate)
  (syssymdirectory)
  (systemdate)
  (sysusernumber)
  (syswindowslevel)
] @variable.builtin

; Transactions
(tranperform) @keyword

; Type conversion - no keywords
; Validation - no keywords
