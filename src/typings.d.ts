declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '@splidejs/react-splide/css' {
    const content: string;
    export default content;
}
