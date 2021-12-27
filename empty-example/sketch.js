x_dim = 1000;
y_dim = 1000;
circle_d = 1;
x_1_old=x_dim/2;
y_1_old=y_dim/2;
var slider_d;
n = 400;
m = 100;
a = 100;
b = 5;
c=5;
d=1;

function setup() {
  createCanvas(x_dim,y_dim);
}

function draw() {
    background(0);
    for (let theta=0; theta<2*PI; theta=theta+(2*PI)/m) {
        x_1_old=x_dim/2;
        y_1_old=y_dim/2;
        b=b+0.001;
        for (let x_0 = 0; x_0<n; x_0=x_0+1) {
            y_0 = a*sin(x_0/b) + d*2*cos(x_0/b);
            x_1 = x_dim/2+x_0*cos(theta)+y_0*sin(theta)+10*sin(theta*200);
            y_1 = y_dim/2-x_0*sin(theta)+y_0*cos(theta);
            stroke(255);
            line(x_1_old,y_1_old,x_1,y_1);
            x_1_old=x_1;
            y_1_old = y_1;
            //ellipse(x_1,y_1,circle_d,circle_d);
        }


    }
}


    
