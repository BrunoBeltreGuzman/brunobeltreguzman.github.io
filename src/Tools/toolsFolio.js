const modules = {};

modules.addNav = function () {
       document.getElementById("mainNav").style.display = "block";
};

modules.removeNav = function () {
       document.getElementById("mainNav").style.display = "none";
};

modules.feebackButton = function () {
       document.getElementById("feedback-button").style.display = "none";
};

module.exports = modules;
