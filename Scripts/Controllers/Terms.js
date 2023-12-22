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
       this.background = new GameObject("image", "back", 0,0,1080,1920,"././Images/Backgrounds/terms.png", this.controller);
       //this.background.SetPosition(0,0);

       //this.background.element.onclick = ((e) => console.log(this.controller.ClearScreen()));
       //console.log(this.background);

       this.buttonNo = new GameObject("image", "noButton", 1080/1.5, 1920/2.5, 292/1.5,693/1.5, "././Images/UI/Terms/noAgree.png", this.controller);
       this.buttonYes = new GameObject("image", "yesButton", 1080/1.5, 1920/3.5, 292/1.5,693/1.5, "././Images/UI/Terms/agree.png", this.controller);

       this.buttonNo.element.onclick = this.ClickNo.bind(this.controller);
       this.buttonYes.element.onclick = this.ClickYes.bind(this.controller);
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