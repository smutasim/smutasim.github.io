// Function to convert Keplerian orbital elements to ECI state
function kepToECI(a, e, i, raan, w, f, mu, unit) {
    // Import functions
    const {sin, cos, atan, sqrt, PI } = Math;
  
    // const mu = 398600.4418; // Earth's gravitational parameter (km^3/s^2)

    // Semi-major axis (a), eccentricity (e), inclination (i)
    // Right Ascension of ascending node (raan), argument of perigee (w), and true anomaly (f)

    if unit=='degs' {
      const conv = PI/180;
      i = i*conv;
      raan = raan*conv;
      w = w*conv;
      f = f*conv;
    }
      
    // Eccentric anomaly (E) calculation
    E = 2*atan(sqrt((1-e)/(1+e))*tan(f/2));

    // Perifocal coordinates
    rPeri = a*(1-e*cos(E));
    vPeri = sqrt(mu/a)/rPeri;
  
    xf = rPeri*cos(E);
    yf = rPeri*sin(E);

    // Coordinates in the ECI frame
    x = xf*(cos(w)*cos(raan)-sin(w)*cos(i)*sin(raan)) - yf*(sin(w)*cos(raan)+cos(w)*cos(i)*sin(raan));
    y = xf*(cos(w)*sin(raan)+sin(w)*cos(i)*cos(raan)) + yf*(cos(w)*cos(i)*cos(raan)-sin(w)*sin(raan));
    z = xf*(sin(w)*sin(i)) + yf*(cos(w)*sin(i));
  
    vx = vPeri*(-sin(E)*(cos(w)*cos(raan)-sin(w)*cos(i)*sin(raan)) - cos(E)*(sin(w)*cos(raan)+cos(w)*cos(i)*sin(raan)));
    vy = vPeri*(-sin(E)*(cos(w)*sin(raan)+sin(w)*cos(i)*cos(raan)) + cos(E)*(cos(w)*cos(i)*cos(raan)-sin(w)*sin(raan)));
    vz = vPeri*(sin(E)*sin(w)*sin(i) + cos(E)*cos(w)*sin(i));

    const outputTextarea = document.getElementById("output");
    outputTextarea.value = {x,y,z,vx,vy,vz};
}
