$(document).ready(function () {
  $(".reviews").each(function () {
    var This = $(this);
    var Nums = This.find(".panel").length;
    var speed = 500;

    This.find(".panel:first").addClass("PanelAct");
    This.append("<div class='control'></div>");

    This.find(".panel").not(".PanelAct").css("left", "100%");

    for (var i = 0; i < Nums; i++) {
      This.find(".control").append("<span></span>");
    }

    This.find(".control span:eq(0)").addClass("ContActive");

    This.find(".control span").click(Reviews);

    function Reviews() {
      var loc = $(this).index();
      var ActivLoc = This.find(".ContActive").index();

      $(this).addClass("ContActive").siblings().removeClass("ContActive");

      var Dire, IDire;

      if (loc > ActivLoc) {
        Dire = "100%";
        IDire = "-100%";
      } else if (loc < ActivLoc) {
        Dire = "-100%";
        IDire = "100%";
      } else {
        return;
      }

      This.find(".panel").not(".PanelAct").css("left", Dire);
      This.find(".panel:eq(" + loc + ")")
        .animate({ left: "0" }, speed)
        .addClass("PanelAct")
        .siblings(".PanelAct")
        .removeClass("PanelAct")
        .animate({ left: IDire }, speed);
    }
  });
});
