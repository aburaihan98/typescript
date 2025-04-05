"use strict";
var MyBook;
(function (MyBook) {
    MyBook[MyBook["IS_LOADING"] = 0] = "IS_LOADING";
    MyBook[MyBook["IS_PENDING"] = 1] = "IS_PENDING";
    MyBook[MyBook["IS_ERROR"] = 2] = "IS_ERROR";
})(MyBook || (MyBook = {}));
var MySchool;
(function (MySchool) {
    MySchool["IS_LOADING"] = "loading";
    MySchool["IS_PENDING"] = "pending";
    MySchool["IS_ERROR"] = "error";
})(MySchool || (MySchool = {}));
