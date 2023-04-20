export class sidebar{ 
    constructor() {
        this.sidebarLinks = $("#sidebarLinks");
        this.sidebarWidth = $(".sidebarContent").outerWidth(true);
        this.sidebarContent = $(".sideBar");
        this.toggleSidebar = $("#toggleSidebar");
        this.toggleSidebar.click(() => {
            this.toogleSidebar();
        });
        this.toogleSidebar();
    }
toogleSidebar() {
    this.sidebarContent.css("left", `${-this.sidebarWidth}`);
    $("#toggleSidebar").removeClass("opened");
    if (this.sidebarContent.css("left") == "0px") {
        this.sidebarContent.animate({ left: - this.sidebarWidth });
        // *NOTE - annimate sidebar links
        this.sidebarLinks.hide(500);
    }   else {
        this.sidebarContent.animate({ left: 0 });
        // *NOTE - annimate sidebar links
        this.sidebarLinks.show(1000);
        $("#toggleSidebar").addClass("opened");
    }
}
}