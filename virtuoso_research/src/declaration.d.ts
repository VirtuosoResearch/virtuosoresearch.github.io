
// needed for importing markdown files into tsx files
declare module '*.md' {
    const content: string;
    export default content;
}
