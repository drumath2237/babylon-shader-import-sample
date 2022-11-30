precision highp float;

uniform float time;

void main(void) {
    float sinValue = sin(time) / 2.0 + 0.5;
    vec3 base = vec3(sinValue, 0, sinValue);

    gl_FragColor = vec4(base, 1.);
}