x_dim = 1000;
y_dim = 1000;
circle_d = 1;
x_1_old=x_dim/2;
y_1_old=y_dim/2;
var slider_d;
n = 400;
m = 100;
a = 10;
b = 20;


function setup() {
  createCanvas(x_dim,y_dim);
  //slider_d = createSlider(1,250,10,10);
  //slider_d.position(10,10);
}

function draw() {
    background(255);
    //ellipse(x_dim/2,y_dim/2,n*2,n*2);

    //circle_d = slider_d.value();
    b=b-0.1;

    for (let theta=0; theta<2*PI; theta=theta+(2*PI)/m) {
        x_1_old=x_dim/2;
        y_1_old=y_dim/2;
        for (let x_0 = 0; x_0<n; x_0=x_0+1) {
            y_0 = a*sin(x_0/b);
            x_1 = x_dim/2+x_0*cos(theta)+y_0*sin(theta);
            y_1 = y_dim/2-x_0*sin(theta)+y_0*cos(theta);
            line(x_1_old,y_1_old,x_1,y_1);
            x_1_old=x_1;
            y_1_old = y_1;
            //ellipse(x_1,y_1,circle_d,circle_d);
        }


    }
}


    
