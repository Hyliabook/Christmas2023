class Terms extends GameObject
{
    background;

    buttonYes;
    buttonNo;

    constructor(control)
    {
        //console.log(control);
        super(null, "terms", control);
        this.controller = control;
       // this.background = new GameObject("rect", "recttt", 0,0,100,100, null, this.controller);
       console.log(this.controller.screenHeight);
       this.background = new GameObject("image", "back", 0,0, this.controller.screenHeight, this.controller.screenWidth,"././Images/Backgrounds/terms.png", this.controller);
       //this.background.SetPosition(0,0);

       //this.background.element.onclick = ((e) => console.log(this.controller.ClearScreen()));
       //console.log(this.background);

       let buttonX = this.background.width / 2.5;
       let buttonY = this.background.height / 15;
       let buttonWidth = this.background.width / 1.3;
       let buttonHeight = this.background.height / 2;

       this.buttonNo = new GameObject("image", "noButton", buttonX, buttonY, buttonWidth, buttonHeight, "././Images/UI/Terms/noAgree.png", this.controller);
       this.buttonYes = new GameObject("image", "yesButton", buttonX, buttonY - 200, buttonWidth, buttonHeight, "././Images/UI/Terms/agree.png", this.controller);

       this.buttonNo.element.onclick = this.ClickNo.bind(this.controller);
       this.buttonYes.element.onclick = this.ClickYes.bind(this.controller);

       this.controller.relScreenHeight = this.background.height;
       this.controller.relScreenWidth = this.background.width;
    }

    ClickYes(e)
    {
        console.log(this.controller);
        this.controller.SwitchScreens("Title");
    }

    ClickNo(e)
    {
        location.reload();
    }
}