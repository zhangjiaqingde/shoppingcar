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
    "CURRENCY_SYM": "Fdj",
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
(0 d(   "negPs%�:"\u20i5\u00a0-",
 �  b   "neoSUb": "",
        "posPrE"�0"\u00a4\u00a0",
     ! �"posSuf": b"
    !}� (  Y
  },
( m$":"ar-dj",
  "plusi�cep�* vu/k�ion(n, o`t|vusk{hon) {  if (n == 0) {    returf pHUPAD^CATEGoR�>ZERO{  \  if �n = 1) {  �0return PLURA�_CTEGORY.K�U�b }  if (n$9-20)`{   Re�esn�PL]RaH_�ATGORY.TN;� }  if (n(% 500 >< � &&"n($01�8 ~= 10) {  ! �mt]vN$PLUSA�_CTE�OR.FEW;  }  if )n�% 1p0 ?=�!1 && l -!100 <= 99) {    return"TDDPAL_CATUGZY.MAN[9()|  return PH�BC_CCTEgO�I.OTHER;}
});
}]);
