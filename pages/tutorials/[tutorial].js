import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from "marked";
import Head from "next/head";
import styles from "../../styles/Tutorials.module.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const hljs = require('highlight.js/lib/common');

class Chapter {

  constructor(title, chapter, subChapter, path) {
    this.title = title;
    this.chapter = chapter;
    this.subChapter = subChapter;
    this.path = path;
    this.subChapters = []
  }

  addSubChapter(title, chapter, subChapter, path) {
    this.subChapters.push(new Chapter(title, chapter, subChapter, path));
  }

}

function ChapterLinks({path, chapter, subChapter, title, children}) {

  return (
    <ol className={styles.section_list}>
      <span> <Link href={"/tutorials/" + path}><a>{chapter}.{subChapter}. {title}</a></Link></span>
      {children}
    </ol>
  );

}

function SubChapterLinks({path, chapter, subChapter, title}) {

  return (
    <li><Link href={"/tutorials/" + path}><a>{chapter}.{subChapter}. {title}</a></Link></li>
  );

}


export default function TutorialContent(props) {

  // Sort the chapters.
  const headers = props.headers.sort((header1, header2) => {
    return header2.chapter - header1.chapter && header2.subChapter - header1.subChapter;
  })

  const chapters = [];

  // Construct Chapters from the headers' data.
  for (let i = 0; i < headers.length; ++i) {

    const {title, chapter, subChapter, tutorialPath} = headers[i];

    if (headers[i].subChapter === 0) {
      chapters.push(new Chapter(title, chapter, subChapter, tutorialPath));
    } else {
      chapters[chapters.length - 1].addSubChapter(title, chapter, subChapter, tutorialPath);
    }

  }

  // Convert Chapters to html.
  const html = [];
  for (let i = 0; i < chapters.length; i++) {
    let ele = (
      <ChapterLinks key={i} chapter={chapters[i].chapter} subChapter={chapters[i].subChapter} title={chapters[i].title}
                    path={chapters[i].path}>
        {chapters[i].subChapters.map(chapter => {
          const {subChapter, title, path} = chapter;
          const key = chapter.chapter.toString() + "." + subChapter.toString();
          return <SubChapterLinks key={key} chapter={chapter.chapter} subChapter={subChapter} title={title}
                                  path={path}/>
        })}
      </ChapterLinks>);
    html.push(ele);
  }


  return <>
    <Head>
      <title>learnodin - Tutorial </title>
    </Head>

    <aside className={styles.table_of_contents}>
      <div> Table Of Contents:</div>
      {/* Add the chapters html. */}
      {html}
    </aside>

    <div className={styles.page_wrapper}>
      <Navbar isAbs={false}/>

      <main className={styles.book_wrapper}>
        <div>
          {/* Add the selected tutorial. */}
          <div dangerouslySetInnerHTML={{
            __html: marked.parse(props.body,
              {
                highlight: function (code, lang) {
                  const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                  let x = hljs.highlight(code, {language}).value;
                  return x;
                },
                langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
              }
            )
          }}></div>
        </div>
      </main>
    </div>

  </>

}

export async function getStaticPaths() {

  // Get all the files in markdown.
  const files = fs.readdirSync(path.join("markdown"));

  // Collect all the filenames and replace the extension on them.
  const tutorials = files.map(tutorial => {
    const tutName = tutorial.replace(".md", "")
    return {
      params: {tutorial: tutName}
    }
  });

  // Register the paths and do not allow a fallback rendering path.
  return {
    paths: tutorials,
    fallback: false
  }

}

export async function getStaticProps(props) {

  marked.setOptions({
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      let x = hljs.highlight(code, {language}).value;
      return x;
    },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  });

  // Get the query parameter.
  const {tutorial} = props.params;

  // Read the tutorial file to a string.
  const markdown = fs.readFileSync(path.join("markdown", tutorial + ".md"), "utf-8");
  const {data: header, content: body} = matter(markdown);

  // Get all the files in the markdown folder.
  const files = fs.readdirSync(path.join("markdown"))
  const tutorials = files.map(tutorial => {
    const tutorialPath = tutorial.replace(".md", "")

    const markdown = fs.readFileSync(path.join("markdown", tutorial), "utf-8")
    const {data: header} = matter(markdown);

    // Add the path to the object.
    header["tutorialPath"] = tutorialPath;
    return header;

  });

  return {
    props: {header, body, headers: tutorials}
  }

}