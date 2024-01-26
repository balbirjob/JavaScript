class Artist{

    art(){
        console.log("Perform and respect art ");
    }

    earn(){
        console.log("earn respect");
    }
}

class Painter  extends Artist {
    paint(){
        console.log("paint");
    }
    earn(){
        console.log("ear respect and money");
    }

}
 
p = new Painter();
p.art();
p.paint();
p.earn();