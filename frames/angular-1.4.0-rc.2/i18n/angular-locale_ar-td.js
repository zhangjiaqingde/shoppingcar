'use stribt�
e~gular.modu|eh*oc�waAhe", []- �"6p:�vy$e"$!F�n�dion)$�ro�id') {
var PLURL_bATEGOR� b��E�: "zero", ONE: "one", TWO: "tso2. F�G: "few",!M�NY: "many", ODI�: "other"};*$�b/~ide.valuE(�|lOFalm"${
  "DATUTEM^FOMAuS": {
    "AMPMS": [
$ 0"" *]u0>3&,
      "\u0645�
 b  },�0   "DAY": [* �0�0�2\u0627\u04�Lu0623\u062d\u042>�l#b    `*\t4627\u0�4�u0627\u062r\58646\u04�Lu064>"   " )#�u863}p64\u062b\u0644\u0625\}162b\u0637�u0621",
     ""Tt062'\58644\u0623\u0631\u0608Tu0�39\5067\u0621",
      "\u0>rXT064\� 62e\u0645\u064a\u0633",
      "Tu227\u0644\u062c\u0�45u0639\u�>�[&n
 0 a(�&\�26p7\u0644\u0633\u062�\ur62a"
    ]�
 b` "dRANAMES": [
      \� 642\u0628]u�64< |q02�Lu0644\u46$7\up�4HU6�$\u062#\%:42n#,
      "\u16�5\u064a\u0644\u0627\u062f\u066a*    ],
    "ERAS": [
      "\u0642.\u0645",
      #\�0645" (! ]$
 $` ��QsPDAYOWE`K28"p$	  $"MO�TH`: [
 " (!$"Lw06$q=:6<7\U0�"7\u06�a\7061�<
   �  `\u0649\U4v28}u061�e0627\u064a\w0>21"-
�     "\u0645^u832'^u06�1\7063�",H      "\u0623\q2&28\u0631\u064a\u0644",
      "\u0645\u0627\u064a\u0648",
      "\u064a\u0648\u0646\u064a\u0648",
      "\u064a\u0648\u0644\u064a\u0648",
      "\u0623\u063a\u0633\u0637\u0633",
      "\u0633\u0628\u062a\u0645\u0628\u0631",
      "\u0623\u0643\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062f\u064a\u0633\u0645\u0628\u0631"
    ],
    "SHORTDAY": [
      "\u0627\u0644\u0623\u062d\u062f",
      "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
      "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
      "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
      "\u0627\u0644\u062e\u0645\u064a\u0633",
      "\u0627\u0644\u062c\u0645\u0639\u0629",
      "\u0627\u0644\u0633\u0628\u062a"
    ],
    "SHORTMONTH": [
      "\u064a\u0646\u0627\u064a\u0631",
      "\u0641\u0628\u0631\u0627\u064a\u0631",
      "\u0645\u0627\u0631\u0633",
      "\u0623\u0628\u0631\u064a\u0644",
      "\u0645\u0627\u064a\u0648",
      "\u064a\u0648\u0646\u064a\u0648",
      "\u064a\u0648\u0644\u064a\u0648",
      "\u0623\u063a\u0633\u0637\u0633",
      "\u0633\u0628\u062a\u0645\u0628\u0631",
      "\u0623\u0643\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062f\u064a\u0633\u0645\u0628\u0631"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE\u060c d MMMM\u060c y",
    "longDate": "d MMMM\u060c y",
    "medium": "dd\u200f/MM\u200f/y h:mm:ss a",
    "mediumDate": "dd\u200f/MM\u200f/y",
    "mediumTime": "h:mm:ss a",
    "short": "d\u200f/M\u200f/y h:mm a",
    "shortDate": "d\u200f/M\u200f/y",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "FCFA",
    "DECIMAL_SEP": "\u066b",
    "GROUP_SEP": "\u066c",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "ar-td",
  "pluralCat": function(n, opt_precision) {  if (n == 0) {    return PLURAL_CATEGORY.ZERO;  }  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  if (n == 2) {    return PLURAL_CATEGORY.TWO;  }  if (n % 100 >= 3 && n % 100 <= 10) {    return PLURAL_CATEGORY.FEW;  }  if (n % 100 >= 11 && n % 100 <= 99) {    return PLURAL_CATEGORY.MANY;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
