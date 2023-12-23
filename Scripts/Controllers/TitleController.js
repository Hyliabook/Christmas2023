class TitleController extends GameObject
{
    part;
    gameController;
    introState;

    bushiMoTimer;
    kLabTimer;
    titleTimer;
    parentTimer;

    black;
    bushimo;
    klab;
    parent;
    title;
    tap;
    white;

    girls;

    fadeRate;

    changeTap;

    constructor(control)
    {
        super(null, "titControl", control);
        this.controller = control;

        this.introState = 0;

        this.black = new GameObject("image", "black",0,0,this.controller.screenHeight,this.controller.screenWidth,"././Images/VFX/black.png", this.controller);
        this.bushimo = new GameObject("image", "bushimo",0,0,this.controller.screenHeight,this.controller.screenWidth,"././Images/Backgrounds/Title/bushimo.png", this.controller); 
        this.bushimo.SetOpacity(0);
        this.klab = new GameObject("image", "klab",0,0,this.controller.screenHeight,this.controller.screenWidth,"././Images/Backgrounds/Title/klab.png", this.controller);
        this.klab.SetOpacity(0);
        this.parent = new GameObject("image", "parent", 0,0, this.controller.screenHeight,this.controller.screenWidth, "././Images/Backgrounds/Title/baby.png", this.controller);
        this.parent.SetOpacity(0);
        this.title =  new GameObject("image", "title", 0,0, this.controller.screenHeight,this.controller.screenWidth, "././Images/Backgrounds/Title/title.png", this.controller);
        this.title.SetOpacity(0);

        this.tap = new GameObject("image", "tap", 0,0,66,370,"././Images/UI/Title/tapScreen.png", this.controller);
        this.controller.PlaceObjectRelativeToScreen(this.tap, .4, .72, .3);
        this.tap.SetOpacity(0);


        this.white = new GameObject("image", "white", 0,0, this.controller.screenHeight,this.controller.screenWidth, "././Images/VFX/white.png", this.controller);
        this.white.SetOpacity(0);
        this.bushiMoTimer = 0;
        this.kLabTimer = 0;
        this.titleTimer = 0;
        this.parentTimer = 0;

        this.fadeRate = 0.0020;

        this.girls = ["Honoka","Kotori","Umi","Hanayo","Maki","Rin","Nico","Eli","Nozomi","Chika","Riko","You","Hanamaru","Ruby","Yohane","Kanan","Mari","Dia"];
        
        let girl = Math.floor(Math.random() * (this.girls.length));
        this.controller.sound[0].src = "././Audio/Voice/Bushimo/bushimo" + this.girls[girl] + ".wav";
        this.controller.sound[0].preload = "auto";
        console.log(girl);
        console.log(this.girls[girl]);

        changeTap = true;
    }


    Update()
    {
        super.Update();

        switch(this.introState)
        {
            case(0): this.Bushimo(); break;
            case(1): this.Klab(); break;
            case(2): this.Parent(); break;
            case(3): this.Title(); break;
            case(4): this.Tap(); break;
        }

        if(this.controller.sound[0].isPlaying() && this.introState == 3)
            this.Tap();
        
    }

    FadeIn(fading, doAudio)
    {
        let currentOpac = fading.GetOpacity();
        let opacChange = this.fadeRate * this.deltaTime;
        let newOpac = currentOpac + opacChange;

        
        if(newOpac > 1 && doAudio)
        {
            switch(this.introState)
            {
                case(0): this.BushimoPlay();
                break;
            }
        }

        if(newOpac > 1)
            newOpac = 1;

        fading.SetOpacity(newOpac);

        

    }
    FadeOut(fading)
    {
        let currentOpac = fading.GetOpacity();
        let opacChange = this.fadeRate * this.deltaTime; 

        let newOpac = currentOpac - opacChange;

        if(newOpac < 0)
            newOpac = 0;

        fading.SetOpacity(newOpac);
    }

    BushimoPlay()
    {
        this.controller.sound[0].play(); 
    }

    Bushimo()
    {

    if(this.bushiMoTimer > 2000 && this.bushiMoTimer < 4000)
    {   
        if(this.bushimo.GetOpacity() < 1)
        this.FadeIn(this.bushimo, true);
        
       // else
       // console.log(this.bushimo.GetOpacity());

    }

    if(this.bushiMoTimer > 4000 && this.bushiMoTimer < 5000)
    {
        this.FadeIn(this.white);
    }

    if(this.bushiMoTimer > 5000 && this.bushiMoTimer < 7000)
    {
        this.klab.SetOpacity(1);
        
        this.FadeOut(this.white);

       // console.log(this.white.GetOpacity());
    }

    if(this.bushiMoTimer > 7000  && this.bushiMoTimer < 8000)
    {
        console.log(this.white.GetOpacity());
        this.FadeIn(this.white);
    }

    if(this.bushiMoTimer > 8000 && this.bushiMoTimer < 12000)
    {
        this.parent.SetOpacity(1);
        this.FadeOut(this.white);
    }

    if(this.bushiMoTimer > 12000 && this.bushiMoTimer < 14000)
    {
        this.FadeIn(this.white);
    }



    if(this.bushiMoTimer < 15000)
    this.bushiMoTimer += this.deltaTime;
    else
    this.introState = 3;
    
    }

    Klab()
    {
    
    this.kLabTimer += this.deltaTime;
    }

    Parent()
    {
        this.parentTimer += this.deltaTime;
    }

    Title()
    {

        if(this.titleTimer < 2000 && this.white.GetOpacity() > 0){
        this.title.SetOpacity(1);
        this.FadeOut(this.white);

        if(this.white.GetOpacity() == 0)
        {
            this.controller.sound[0].src = "././Audio/Music/takaramanos.mp3";
            this.controller.sound[0].loop = true;
            this.controller.sound[0].play();
            this.introState = 4;
            this.fadeRate = 0.0010;
        }
        }

        
        if(this.titleTimer < 30000)
        this.titleTimer += this.deltaTime;
    }

    Tap()
    {
        if(this.tap.GetOpacity() == 1 || this.tap.GetOpacity() == 0)
            this.changeTap= !this.changeTap;

        if(this.changeTap)
            this.FadeIn(this.tap, false);
        else
            this.FadeOut(this.tap);
    }

}