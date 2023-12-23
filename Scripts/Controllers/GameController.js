class GameController extends GameObject
{
    screen;
    currentScreen;
    
    sound;

    screenWidth;
    screenHeight;

    constructor()
    {
        super(null, "MainController", null);

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

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

    PlaceObjectRelativeToScreen(ob, sizePer, yPer, xPer)
    {
        let screenAspect = this.screenWidth / this.screenHeight;
        let obAspect = ob.width/ob.height; 

        let newX = this.screenWidth * xPer;
        let newY = this.screenHeight * yPer;

        let newWidth = this.screenWidth * sizePer;
        let newHeight = newWidth / obAspect;

        ob.SetTransforms(newX, newY, newHeight, newWidth);
        ob.CenterObject();

    }
}