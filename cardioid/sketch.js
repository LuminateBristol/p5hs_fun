x_dim = 1000;
y_dim = 1000;
x_1_old = x_dim/2;
y_1_old = y_dim/2;
circle_d = 100;

n = 12;

function setup() {
  createCanvas(x_dim,y_dim);
}

function draw() {
    background(255);
    for (let theta=0; theta<2*PI; theta=theta+(PI/n)) {
        for (let j = 10; j<200; j=j+10) {
            for (let i=0; i<2*3.14; i=i+0.01) {
                x = 2*j*(1-cos(i))*cos(i);
                y = 2*j*(1-cos(i))*sin(i);
                x_1 = (x_dim/2)+x*cos(theta)+y*sin(theta);
                y_1 = (y_dim/2)-x*sin(theta)+y*cos(theta);
                stroke(80,0,0);
                line(x_1_old,y_1_old,x_1,y_1);
                x_1_old = x_1;
                y_1_old = y_1;
                //ellipse(500+x_1,500+y_1,circle_d,circle_d);
            }
        }
    }
}
