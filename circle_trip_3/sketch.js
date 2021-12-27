x_dim = 1000;
y_dim = 1000;
circle_d = 1;
x_1_old=x_dim/2;
y_1_old=y_dim/2;
var slider_d;
n = 400;
m = 100;
e = 1;

function setup() {
  createCanvas(x_dim,y_dim);
}

function draw() {
    background(0);
    e=e+0.8;

    for (let theta=0; theta<2*PI; theta=theta+(2*PI)/m) {
        x_1_old=x_dim/2;
        y_1_old=y_dim/2;
        a=1*sin(theta-PI/2.7)*400+500;
        b=3*cos(theta+PI/2.2)*80+350;
        c=2*sin(theta+PI/5)*180+500;
        for (let x_0 = 10; x_0<n; x_0=x_0+1) {
            y_0 = e*(sin((2*PI*x_0)/a)+sin((2*PI*x_0)/b)+sin((2*PI*x_0)/c)+sin((2*PI*x_0)/c));
            x_1 = x_dim/2+x_0*cos(theta)+y_0*sin(theta);
            y_1 = y_dim/2-x_0*sin(theta)+y_0*cos(theta);
            stroke(255);
            line(x_1_old,y_1_old,x_1,y_1);
            x_1_old=x_1;
            y_1_old = y_1;
        }


    }
}


    
