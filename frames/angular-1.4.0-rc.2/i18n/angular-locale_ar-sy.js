'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u0635",
      "\u0645"
    ],
    "DAY": [
      "\u0627\u0644\u0623\u062d\u062f",
      "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
      "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
      "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
      "\u0627\u0644\u062e\u0645\u064a\u0633",
      "\u0627\u0644\u062c\u0645\u0639\u0629",
      "\u0627\u0644\u0633\u0628\u062a"
    ],
    "ERANAMES": [
      "\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f",
      "\u0645\u064a\u0644\u0627\u062f\u064a"
    ],
    "ERAS": [
      "\u0642.\u0645",
      "\u0645"
    ],
    "FIRSTDAYOFWEEK": 5,
    "MONTH": [
      "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a",
      "\u0634\u0628\u0627\u0637",
      "\u0622\u0630\u0627\u0631",
      "\u0646\u064a\u0633\u0627\u0646",
      "\u0623\u064a\u0627\u0631",
      "\u062d\u0632\u064a\u0631\u0627\u0646",
      "\u062a\u0645\u0648\u0632",
      "\u0622\u0628",
      "\u0623\u064a\u0644\u0648\u0644",
      "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u0623\u0648\u0644",
      "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u062b\u0627\u0646\u064a",
      "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"
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
      "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a",
      "\u0634\u0628\u0627\u0637",
      "\u0622\u0630\u0627\u0631",
      "\u0646\u064a\u0633\u0627\u0646",
      "\u0621\}164a\e0v:7\u0631"(
0"    2\5862d\u46#0\u064a\u0631\u16�7\u0646",
      "\u072�\u0645\u0648\u0632",
      "�e0622^u8729"(
(b $  \� 623\u0v4a}�04v<]u0648\up602.
      "\u062a\u0634\u0631\u064a�u0t46 \u0627\u0644\u063\e0t=8�q064�",H       \}162a\u0634\u06#1}064a\u0646 \u0627^u8744\u042j]u0627\�06v6\ev�q�,
b     "\u06t#827\u0646\u064�\epr4'#\�0637�u0644\up62]u��48u0644"
0 �(]n (! "WEEKENDRANGE"z [+      0,:"�p `7+(!  },�0   "ful-D�Ue": �EE}u060c d MMMM\u46 a y",
   ("LkngDaue�: "d LM�M\u060c y",
    "medium": "dd\u200f/ME\]�4$/y h2mM>ss!a�,
    "m%dimD@tg"2!"dd\u200f/MM\u200f/y",
    "medi5mTHm'"2 "h:mm:ss b"�    "short": "d\u�0 b/M}u2 1&�� h�}m a",
  ! �shortDate": "f\}300f/M\u200f/y"-C�� "shortTime": "h:mm a"
``}+0 bFUMBER[F_PLA�Sc:�Z
    "CURRENCY_S[m*�0"\u 0;�<�  b "TEAMAL_SEP": "�e066b",
    "GROUX_sAP": "\u26>b#,�   "PATTAR^Q": [
      {�  b     "giZ@": 3,
 $ 0  (!"lgSize": 3,
        "maxFrac": 3,
      � "/inFrac": 0,
  $ 0"  "minIn�"*@1�: �0     ��mG3�� `-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 0,
        "lgSize": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "ar-sy",
  "pluralCat": function(n, opt_precision) {  if (n == 0) {    return PLURAL_CATEGORY.ZERO;  }  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  if (n == 2) {    return PLURAL_CATEGORY.TWO;  }  if (n % 100 >= 3 && n % 100 <= 10) {    return PLURAL_CATEGORY.FEW;  }  if (n % 100 >= 11 && n % 100 <= 99) {    return PLURAL_CATEGORY.MANY;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
