// export const category = {
//   functions: {},
//   // Standalone keywords
//   keywords: {},
//   // Keywords with a {keyword} = {parameter expression} format
//   statements: {},
// }

export const boolean = {
  functions: {
    anyservice: $ => /anyservice/i,
    anywarning: $ => /anywarning/i,
  },
  keywords: {
    all: $ => /all/i,
    and: $ => /and/i,
    any: $ => /any/i,
    by: $ => /by/i,
    not: $ => /not/i,
    or: $ => /or/i,
  },
};

export const control_flow = {
  functions: {
    execute: $ => /execute/i,
    initsubroutine: $ => /initsubroutine/i,
  },
  keywords: {
    call: $ => /call/i,
    define: $ => /define/i,
    do: $ => /do/i,
    each: $ => /each/i,
    else: $ => /else/i,
    end: $ => /end/i,
    every: $ => /every/i,
    for: $ => /for/i,
    if: $ => /if/i,
    include: $ => /#include/i,
    none: $ => /none/i,
    procedure: $ => /procedure/i,
    select: $ => /select/i,
    setup: $ => /setup/i,
    sort: $ => /sort/i,
    target: $ => /target/i, // Not a statement because it only accepts a record name, which is not an expression.
    terminate: $ => /terminate/i,
    then: $ => /then/i,
    to: $ => /to/i,
    until: $ => /until/i,
    while: $ => /while/i,
    with: $ => /with/i,
  },
  statements: {
    whilelimit: $ => /whilelimit/i,
  },
};

export const credit_reporting = {
  functions: {
    initcreditreport: $ => /initcreditreport/i,
    queuecreditreport: $ => /queuecreditreport/i,
  },
  keywords: {
    pullcreditreport: $ => /pullcreditreport/i,
  },
};

export const crt = {
  functions: {
    screenxypos: $ => /screenxypos/i,
  },
  keywords: {
    bell: $ => /bell/i,
    blink: $ => /blink/i,
    bright: $ => /bright/i,
    dim: $ => /dim/i,
    stopblink: $ => /stopblink/i,
    enterdelimiter: $ => /enterdelimiter/i, // Probably for CRT? Docs aren't really clear.
  },
};

export const datetime = {
  functions: {
    dateoffset: $ => /dateoffset/i,
    day: $ => /day/i,
    dayofweek: $ => /dayofweek/i,
    fullyear: $ => /fullyear/i,
    hour: $ => /hour/i,
    minute: $ => /minute/i,
    month: $ => /month/i,
    year: $ => /year/i,
  }
};

export const demand_ui = {
  functions: {
    dialogintrotext: $ => /dialogintrotext/i,
    dialogpromptchar: $ => /dialogpromptchar/i,
    dialogpromptcode: $ => /dialogpromptcode/i,
    dialogpromptcombooption: $ => /dialogpromptcombooption/i,
    dialogpromptcombostart: $ => /dialogpromptcombostart/i,
    dialogpromptdate: $ => /dialogpromptdate/i,
    dialogpromptlistoption: $ => /dialogpromptlistoption/i,
    dialogpromptliststart: $ => /dialogpromptliststart/i,
    dialogpromptmoney: $ => /dialogpromptmoney/i,
    dialogpromptnumber: $ => /dialogpromptnumber/i,
    dialogpromptpassword: $ => /dialogpromptpassword/i,
    dialogpromptrate: $ => /dialogpromptrate/i,
    dialogpromptyesno: $ => /dialogpromptyesno/i,
    dialogstart: $ => /dialogstart/i,
    dialogstartgroupbox: $ => /dialogstartgroupbox/i,
    dialogtextlistoption: $ => /dialogtextlistoption/i,
    dialogtextliststart: $ => /dialogtextliststart/i,

    entercharacter: $ => /entercharacter/i,
    entercode: $ => /entercode/i,
    enterdate: $ => /enterdate/i,
    enterline: $ => /enterline/i,
    entermoney: $ => /entermoney/i,
    enternumber: $ => /enternumber/i,
    enterrate: $ => /enterrate/i,
    enteryesno: $ => /enteryesno/i,

    popupmessage: $ => /popupmessage/i,
    winddeconnect: $ => /winddeconnect/i,
    winddedisconnect: $ => /winddedisconnect/i,
    winddeexecute: $ => /winddeexecute/i,
    winddepokedata: $ => /winddepokedata/i,
    windowssend: $ => /windowssend/i,
    winmessagefield: $ => /winmessagefield/i,
    winmessagesend: $ => /winmessagesend/i,
    winmodetext: $ => /winmodetext/i,
    winmodewindows: $ => /winmodewindows/i,
    winmessagestart: $ => /winmessagestart/i,
    yesnoprompt: $ => /yesnoprompt/i,
  },
  keywords: {
    // These keywords are assigned as functions in the highlights.scm - looks weird otherwise
    dialogclose: $ => /dialogclose/i,
    dialogdisplay: $ => /dialogdisplay/i,
    dialogendgroupbox: $ => /dialogendgroupbox/i,
    dialogendgrouping: $ => /dialogendgrouping/i,
    dialognewcolumn: $ => /dialognewcolumn/i,
    dialogpromptcomboend: $ => /dialogpromptcomboend/i,
    dialogpromptlistend: $ => /dialogpromptlistend/i,
    dialogstartgrouping: $ => /dialogstartgrouping/i,
    dialogtextlistend: $ => /dialogtextlistend/i,
  },
};

export const div_project = {
  functions: { divprojectinit: $ => /divprojectinit/i, },
  keywords: { divprojectcalc: $ => /divprojectcalc/i, },
};

export const email = {
  functions: {
    emailline: $ => /emailline/i,
    emailsend: $ => /emailsend/i,
    emailstart: $ => /emailstart/i,
  },
};

// Somewhat confusing name next to file_system, but consistent with Symitar for their DB-related keywords.
export const file_maintenance = {
  functions: {
    copyapp: $ => /copyapp/i,
    createfinancefromcredrep: $ => /createfinancefromcredrep/i,
  },
  keywords: {
    afterlast: $ => /afterlast/i,
    beforefirst: $ => /beforefirst/i,
    change: $ => /change/i,
    clearwarning: $ => /clearwarning/i,
    create: $ => /create/i,
    delete: $ => /delete/i,
    fmperform: $ => /fmperform/i,
    from: $ => /from/i,
    insert: $ => /insert/i,
    into: $ => /into/i,
    // lastaccount: $ => /lastaccount/i,
    loc: $ => /loc/i,
    queue: $ => /queue/i,
    remove: $ => /remove/i,
    revise: $ => /revise/i,
    set: $ => /set/i,
    setwarning: $ => /setwarning/i,
    slid: $ => /slid/i,
    targetfile: $ => /targetfile/i,
    uniquekey: $ => /uniquekey/i,
  },
};

export const file_system = {
  functions: {
    filearchiveadd: $ => /filearchiveadd/i,
    filearchiveextract: $ => /filearchiveextract/i,
    fileclose: $ => /fileclose/i,
    filecreate: $ => /filecreate/i,
    filedecrypt: $ => /filedecrypt/i,
    filedelete: $ => /filedelete/i,
    fileencrypt: $ => /fileencrypt/i,
    filegetpos: $ => /filegetpos/i,
    filelistclose: $ => /filelistclose/i,
    filelistopen: $ => /filelistopen/i,
    filelistread: $ => /filelistread/i,
    fileopen: $ => /fileopen/i,
    fileread: $ => /fileread/i,
    filereadline: $ => /filereadline/i,
    filesetpos: $ => /filesetpos/i,
    filewriteline: $ => /filewriteline/i,
  },
};

export const ftp = {
  functions: {
    ftpclose: $ => /ftpclose/i,
    ftpcmd: $ => /ftpcmd/i,
    ftpget: $ => /ftpget/i,
    ftplogin: $ => /ftplogin/i,
    ftpopen: $ => /ftpopen/i,
    ftpput: $ => /ftpput/i,
  },
};

export const get_data = {
  functions: {
    getdatachar: $ => /getdatachar/i,
    getdatadate: $ => /getdatadate/i,
    getdatamoney: $ => /getdatamoney/i,
    getdatanumber: $ => /getdatanumber/i,
    getdatarate: $ => /getdatarate/i,
  },
};

export const get_field = {
  functions: {
    getfielddatamax: $ => /getfielddatamax/i,
    getfieldatatype: $ => /getfieldatatype/i,
    getfieldhelpfile: $ => /getfieldhelpfile/i,
    getfieldmnemonic: $ => /getfieldmnemonic/i,
    getfieldname: $ => /getfieldname/i,
    getfieldnumber: $ => /getfieldnumber/i,
  },
};

export const html = {
  functions: {
    htmlviewline: $ => /htmlviewline/i,
  },
  keywords: {
    htmlviewdisplay: $ => /htmlviewdisplay/i,
    htmlviewopen: $ => /htmlviewopen/i,
  }
};

export const input = {
  functions: {
    characterread: $ => /characterread/i,
    coderead: $ => /coderead/i,
    dateread: $ => /dateread/i,
    moneyread: $ => /moneyread/i,
    numberread: $ => /numberread/i,
    rateread: $ => /rateread/i,
    yesnoread: $ => /yesnoread/i,
  },
};

export const laser_printer = {
  functions: {
    hpboxdraw: $ => /hpboxdraw/i,
    hpesc: $ => /hpesc/i,
    hpfont: $ => /hpfont/i,
    hplinedraw: $ => /hplinedraw/i,
    hplinesperinch: $ => /hplinesperinch/i,
    hpreset: $ => /hpreset/i,
    hpsetup: $ => /hpsetup/i,
    hpunderline: $ => /hpunderline/i,
    hpxpos: $ => /hpxpos/i,
    hpypos: $ => /hpypos/i,
  },
};

export const loan_project = {
  functions: {
    loanprojectinit: $ => /loanprojectinit/i,
  },
  keywords: {
    loanprojectcalc: $ => /loanprojectcalc/i,
  },
};

export const math = {
  functions: {
    abs: $ => /abs/i,
    exp: $ => /exp/i,
    floor: $ => /floor/i,
    log: $ => /log/i,
    mod: $ => /mod/i,
    pwr: $ => /pwr/i,
  },
};

export const mode = {
  keywords: {
    accountchange: $ => /accountchange/i,
    acs: $ => /acs/i,
    atmdialog: $ => /atmdialog/i,
    audio: $ => /audio/i,
    batch: $ => /batch/i,
    cardcreationwizard: $ => /cardcreationwizard/i,
    certificate: $ => /certificate/i,
    checkdisbursedwizard: $ => /checkdisbursedwizard/i,
    collection: $ => /collection/i,
    customforms: $ => /customforms/i,
    customformswindows: $ => /customformswindows/i,
    demand: $ => /demand/i,
    excpitem: $=> /excpitem/i,
    homebanking: $ => /homebanking/i,
    mcw: $ => /mcw/i,
    mcwinteractive: $ => /mcwinteractive/i,
    stateless: $ => /stateless/i,
    subroutine: $ => /subroutine/i,
    symconnect: $ => /symconnect/i,
    validation: $ => /validation/i,
    windows: $ => /windows/i,
    windowsprint: $ => /windowsprint/i,
  },
};

export const output = {
  functions: {
    outputclose: $ => /outputclose/i,
    outputopen: $ => /outputopen/i,
    outputswitch: $ => /outputswitch/i,
  },
  keywords: {
    ascii: $ => /ascii/i,
    col: $ => /col/i, // Has some special additional arguments (left, right, wrap), otherwise it'd be a statement
    datafile: $ => /datafile/i,
    ebcdic: $ => /ebcdic/i,
    headers: $ => /headers/i,
    labels: $ => /labels/i,
    left: $ => /left/i,
    letter: $ => /letter/i,
    newline: $ => /newline/i,
    newpage: $ => /newpage/i,
    nonansistandard: $ => /nonansistandard/i,
    print: $ => /print/i,
    printcontrol: $ => /printcontrol/i,
    right: $ => /right/i,
    starting: $ => /starting/i,
    suppress: $ => /suppress/i,
    suppressnewline: $ => /suppressnewline/i,
    trailers: $ => /trailers/i,
    wrap: $ => /wrap/i,
  },
  statements: {
    across: $ => /across/i,
    blocksize: $ => /blocksize/i,
    datasize: $ => /datasize/i,
    formlength: $ => /formlength/i,
    header: $ => /header/i,
    recordsize: $ => /recordsize/i,
    reportcategory: $ => /reportcategory/i,
    subtotal: $ => /subtotal/i,
    title: $ => /title/i,
    total: $ => /total/i,
    width: $ => /width/i,
  },
};

export const overdraw_calc = {
  keywords: {
    overdrawavailablecalc: $ => /overdrawavailablecalc/i,
    overdrawavailableinit: $ => /overdrawavailableinit/i,
  },
};

export const string = {
  functions: {
    capitalize: $ => /capitalize/i,
    charactersearch: $ => /charactersearch/i,
    length: $ => /length/i,
    lowercase: $ => /lowercase/i,
    md5hash: $ => /md5hash/i,
    passwordhash: $ => /passwordhash/i,
    repeatchr: $ => /repeatchr/i,
    uppercase: $ => /uppercase/i,
  },
};

export const system = {
  functions: {
    sysusername: $ => /sysusername/i,
  },
  keywords: {
    liveinstcheck: $ => /liveinstcheck/i,
    prevsystemdate: $ => /prevsystemdate/i,
    sysactualdate: $ => /sysactualdate/i,
    sysactualtime: $ => /sysactualtime/i,
    sysclientnumber: $ => /sysclientnumber/i,
    sysconsolenum: $ => /sysconsolenum/i,
    syshostname: $ => /syshostname/i,
    sysmemomode: $ => /sysmemomode/i,
    prevsystemdate: $ => /prevsystemdate/i,
    syssymdirectory: $ => /syssymdirectory/i,
    systemdate: $ => /systemdate/i,
    sysusernumber: $ => /sysusernumber/i,
    syswindowslevel: $ => /syswindowslevel/i,
  },
};

export const transactions = {
  keywords: {
    tranperform: $ => /tranperform/i,
  },
};

export const type_conversion = {
  functions: {
    chrvalue: $ => /chrvalue/i,     // Character to Number - ASCII value of chr
    ctrlchr: $ => /ctrlchr/i,       // Number to Character
    date_conv: $ => /date/i,        // Numbers to Date
    datevalue: $ => /datevalue/i,   // Character to Date
    format: $ => /format/i,         // Arbitrary to Character
    float_conv: $ => /float/i,      // Numeric (Number, Date, Money, etc) to Float
    floatvalue: $ => /floatvalue/i, // Number to Float
    int: $ => /int/i,               // Decimal (Money, Float, Rate) to Integer 
    money_conv: $ => /money/i,      // Numeric to Money
    number_conv: $ => /number/i,    // Numeric to Number
    rate_conv: $ => /rate/i,        // Numeric to Rate
    value: $ => /value/i,           // Character to Number - numbers in string
  },
};

export const validation = {
  functions: {
    validatefieldset: $ => /validatefieldset/i,
  },
};
