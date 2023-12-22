class GameController extends GameObject
{
    screen;
    currentScreen;
    
    sound;

    constructor()
    {
        super(null, "MainController", null);

        this.screen = "Terms";
        console.log(this.screen);
        this.SwitchScreens(this.screen);
        
            this.sound = [];

            for(let x=0; x<4; x++)
            this.sound[x] = document.querySelector("#sfx" + x);
        

    }

    Init()
    {
        this.controller = this;
    }

    Update()
    {
        super.Update();
    }

    SwitchScreens(switching)
    {
        console.log(switching);

        this.ClearScreen();
        switch(switching){
            case("Terms"): 
                this.currentScreen = new Terms(this);
                //console.log(this.currentScreen.background.y + " " + this.currentScreen.background.y);
            break;
            case("Title"): 
                this.currentScreen = new TitleController(this);
            break;
            default: 
        }
    }

    ClearScreen()
    {
        this.svgObject.innerHTML = "";
    }

    RemoveObject(rObject)
    {
        this.svgObject.remove(rObject.element);
    }
}