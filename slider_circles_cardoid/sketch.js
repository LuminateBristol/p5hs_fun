x_dim = 1000;
y_dim = 1000;
x_1_old = x_dim/2;
y_1_old = y_dim/2;

var slider_d;
var slider_int;
var slider_n;

//circle_d = 25;
//n = 25;
//int = 0.1;

function setup() {
  createCanvas(x_dim,y_dim);
  slider_d = createSlider(1,250,10,10);
  slider_d.position(10,10);
  slider_n = createSlider(1,25,5,1);
  slider_n.position(10,25);
  slider_int = createSlider(0.001,0.5,0.1,0.001);
  slider_int.position(10,40);
}

function draw() {
    background(255);

    circle_d = slider_d.value();
    n = slider_n.value();
    int = slider_int.value();

    for (let theta=0; theta<2*PI; theta=theta+(PI/n)) {
        for (let j = 10; j<200; j=j+10) {
            for (let i=0; i<2*3.14; i=i+int) {
                x = 2*j*(1-cos(i))*cos(i);
                y = 2*j*(1-cos(i))*sin(i);
                x_1 = (x_dim/2)+x*cos(theta)+y*sin(theta);
                y_1 = (y_dim/2)-x*sin(theta)+y*cos(theta);
                stroke(80,0,0);
                //line(x_1_old,y_1_old,x_1,y_1);
                x_1_old = x_1;
                y_1_old = y_1;
                ellipse(x_1,y_1,circle_d,circle_d);
            }
        }
    }
}


    
