import Link from "next/link";
import Image from "next/image";

import "@/app/globals.css";

const htmlContent = `<p class="lead">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p> <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p> <p>We get lots of complaints about it actually, with people regularly asking us things like:</p> <blockquote> <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p> </blockquote> <p>We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p> <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p> <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p> <pre><code class="language-html">&lt;article class="prose"&gt; &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt; &lt;p&gt; For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween. &lt;/p&gt; &lt;p&gt; But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. &lt;/p&gt; &lt;!-- ... --&gt; &lt;/article&gt; </code></pre> <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p> <hr /> <h2>What to expect from here on out</h2> <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p> <p>It's important to cover all of these use cases for a few reasons:</p> <ol> <li>We want everything to look good out of the box.</li> <li>Really just the first reason, that's the whole point of the plugin.</li> <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li> </ol> <p>Now we're going to try out another header style.</p> <h3>Typography should be easy</h3> <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p> <p>Something a wise person once told me about typography is:</p> <blockquote><p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p></blockquote> <p>It's probably important that images look okay here by default as well:</p> <figure> <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="" /> <figcaption>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</figcaption> </figure> <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p> <ul> <li>So here is the first item in this list.</li> <li>In this example we're keeping the items short.</li> <li>Later, we'll use longer, more complex list items.</li> </ul> <p>And that's the end of this section.</p> <h2>What if we stack headings?</h2> <h3>We should make sure that looks good, too.</h3> <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p> <h3>When a heading comes after a paragraph …</h3> <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p> <ul> <li> <p><strong>I often do this thing where list items have headings.</strong></p> <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p> <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p> </li> <li> <p><strong>Since this is a list, I need at least two items.</strong></p> <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p> </li> <li> <p><strong>It's not a bad idea to add a third item either.</strong></p> <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p> </li> </ul> <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p> <h2>Code should look okay by default.</h2> <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p> <p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p> <pre><code class="language-js">module.exports = { purge: [], theme: { extend: {}, }, variants: {}, plugins: [], } </code></pre> <p>Hopefully that looks good enough to you.</p> <h3>What about nested lists?</h3> <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p> <ol> <li> <strong>Nested lists are rarely a good idea.</strong> <ul> <li>You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.</li> <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li> <li>Nesting tons of folders in your source code is also not helpful.</li> </ul> </li> <li> <strong>Since we need to have more items, here's another one.</strong> <ul> <li>I'm not sure if we'll bother styling more than two levels deep.</li> <li>Two is already too much, three is guaranteed to be a bad idea.</li> <li>If you nest four levels deep you belong in prison.</li> </ul> </li> <li> <strong>Two items isn't really a list, three is good though.</strong> <ul> <li>Again please don't nest lists if you want people to actually read your content.</li> <li>Nobody wants to look at this.</li> <li>I'm upset that we even have to bother styling this.</li> </ul> </li> </ol> <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p> <ul> <li> <p><strong>For example, here's another nested list.</strong></p> <p>But this time with a second paragraph.</p> <ul> <li>These list items won't have <code>&lt;p&gt;</code> tags</li> <li>Because they are only one line each</li> </ul> </li> <li> <p><strong>But in this second top-level list item, they will.</strong></p> <p>This is especially annoying because of the spacing on this paragraph.</p> <ul> <li> <p>As you can see here, because I've added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p> <p>This is the second line I'm talking about by the way.</p> </li> <li><p>Finally here's another list item so it's more like a list.</p></li> </ul> </li> <li><p>A closing list item, but with no nested list, because why not?</p></li> </ul> <p>And finally a sentence to close off this section.</p> <h2>There are other elements we need to style</h2> <p>I almost forgot to mention links, like <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.</p> <p>We even included table styles, check it out:</p> <table> <thead> <tr> <th>Wrestler</th> <th>Origin</th> <th>Finisher</th> </tr> </thead> <tbody> <tr> <td>Bret "The Hitman" Hart</td> <td>Calgary, AB</td> <td>Sharpshooter</td> </tr> <tr> <td>Stone Cold Steve Austin</td> <td>Austin, TX</td> <td>Stone Cold Stunner</td> </tr> <tr> <td>Randy Savage</td> <td>Sarasota, FL</td> <td>Elbow Drop</td> </tr> <tr> <td>Vader</td> <td>Boulder, CO</td> <td>Vader Bomb</td> </tr> <tr> <td>Razor Ramon</td> <td>Chuluota, FL</td> <td>Razor's Edge</td> </tr> </tbody> </table> <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p> <h3>Sometimes I even use <code>code</code> in headings</h3> <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.</p> <p> Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it. </p> <h4>We haven't used an <code>h4</code> yet</h4> <p>But now we have. Please don't use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p> <p>We don't style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p> <h3>We still need to think about stacked headings though.</h3> <h4>Let's make sure we don't screw that up with <code>h4</code> elements, either.</h4> <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p> <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p> <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>`;

export default function Lesson() {
  return (
    <>
      <div className="flex h-full">
        <div className="w-full">
          <div className="flex flex-col h-full">
            <div className="h-16 flex items-center shrink-0 bg-white border-b border-zinc-200 z-50">
              <div className="container">
                <div className="flex items-center space-x-6">
                  <Link href="/" className="flex items-center text-blue-600">
                    <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.2 173.7" fill="currentColor">
                      <path d="M86.3 173.6c22 0 44-.1 66 .1 7.3.1 13.3-2.4 18.2-7.7 13.8-15.1 27.8-30.1 41.3-45.5 2.1-2.5 3.4-7.1 2.8-10.3-1.3-7.6-8.9-9.5-14.2-3.9-10.3 10.9-20.4 21.9-30.4 33.1-4.1 4.6-8.7 6.6-14.9 6.6-31.7-.1-63.3-.4-95 .1-15.1.2-21.3-10-21.2-21.4.1-15.7.1-31.3 0-47-.1-13.5 7.3-22.4 22-22.2 32.2.6 64.3.1 96.5.3 4.4 0 7.5-1.3 10.4-4.6 10.2-11.4 20.6-22.7 31-34 2.9-3.2 4.3-6.6 2.9-10.9-1.4-4.1-4-6.3-8.5-6.3-37.3 0-74.7-.2-112 .3-4.4 0-9.7 2.3-12.9 5.3-20.7 19-41.1 38.5-61.5 57.9C2.4 67.7.1 73 .1 79.2c0 24.8-.1 49.7 0 74.5.1 12.3 8.3 20 20.7 20 21.8-.1 43.7-.1 65.5-.1z" />
                      <path d="M115.8 114.4c12 0 24-.1 36 0 7.8 0 14.1-2.6 19.4-8.5 13.1-14.6 26.6-28.9 39.7-43.6 2.2-2.4 4-6 4.3-9.1.4-3.9-2-7.4-6.1-8.8-3.8-1.3-6.7.5-9.3 3.2-9.9 10.8-19.9 21.6-29.6 32.5-4.3 4.8-9.4 7-15.8 7-25.5-.1-51-.1-76.5 0-7.5 0-10.8 3.4-10.8 11v5c.1 7.8 3.3 11.2 11.3 11.3 12.4.1 24.9 0 37.4 0z" />
                    </svg>
                  </Link>
                  <nav>
                    <ul className="flex items-center space-x-6 [&_li]:relative [&_li:not(:first-child)]:before:content-['/'] [&_li:not(:first-child)]:before:absolute [&_li:not(:first-child)]:before:top-1/2 [&_li:not(:first-child)]:before:-translate-y-1/2 [&_li:not(:first-child)]:before:-left-4 [&_li:not(:first-child)]:before:text-sm [&_li:not(:first-child)]:before:text-zinc-200">
                      <li>
                        <span className="group relative">
                          <Link href="#" className="size-7 rounded-md flex items-center justify-center bg-zinc-100 transition hover:bg-zinc-200">
                            <i className="text-lg ri-arrow-left-s-line"></i>
                          </Link>
                          <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-white shadow shadow-zinc-100 border border-zinc-200 px-4 py-2.5 rounded-md left-1/2 -translate-x-1/2 mt-3 before:size-2.5 before:bg-white before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-1.5 before:rotate-45 before:border-l before:border-t before:border-zinc-200 before:rounded-tl-sm">
                            <span className="text-sm font-medium">Моё обучение</span>
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="group relative">
                          <span className="h-7 px-2 rounded-md flex items-center justify-center bg-zinc-100 transition hover:bg-zinc-200">
                            <span className="max-w-[190px] truncate text-sm">Основы программирования</span>
                          </span>
                          <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-white shadow shadow-zinc-100 border border-zinc-200 px-4 py-2.5 rounded-md left-1/2 -translate-x-1/2 mt-3 before:size-2.5 before:bg-white before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-1.5 before:rotate-45 before:border-l before:border-t before:border-zinc-200 before:rounded-tl-sm">
                            <span className="text-sm font-medium">Основы программирования</span>
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="group relative">
                          <span className="h-7 px-2 rounded-md flex items-center justify-center">
                            <span className="max-w-[190px] truncate text-sm">Что такое программирование?</span>
                          </span>
                          <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute bg-white shadow shadow-zinc-100 border border-zinc-200 px-4 py-2.5 rounded-md left-1/2 -translate-x-1/2 mt-3 before:size-2.5 before:bg-white before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-1.5 before:rotate-45 before:border-l before:border-t before:border-zinc-200 before:rounded-tl-sm">
                            <span className="text-sm font-medium">Что такое программирование?</span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/beams.jpg)] bg-fixed bg-center opacity-50"></div>
              <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-fixed bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
              <div className="overflow-auto h-full relative z-10">
                <div className="bg-yellow-100 border-b border-yellow-200">
                  <div className="container">
                    <div className="py-2 text-sm flex items-center justify-center space-x-2">
                      <i className="text-lg text-yellow-500 ri-information-2-fill"></i>
                      <span>
                        Дополнительные ресурсы для закрепления темы –&nbsp;
                        <Link href="#" className="font-medium border-b border-zinc-500">
                          жми сюда!
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full my-4 px-6 py-12 bg-white ring-1 ring-zinc-900/5 max-w-4xl mx-auto">
                  <div className="prose mx-auto prose-zinc">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-16 flex items-center shrink-0 bg-white border-t border-zinc-200 mt-auto">
              <div className="container">
                <div className="flex items-center">
                  <div className="flex text-sm space-x-2">
                    <div className="text-zinc-500">Обнаружили ошибку?</div>
                    <Link href="#" className="flex space-x-1 font-medium border-b border-zinc-500">
                      <i className="ri-flag-line"></i>
                      <span>Сообщите нам!</span>
                    </Link>
                  </div>

                  <div className="flex items-center flex-wrap gap-x-4 gap-y-2 ml-auto">
                    <button type="button" className="max-sm:w-full max-sm:justify-center whitespace-nowrap flex items-center cursor-pointer h-9.5 px-4 rounded-lg border-2 border-zinc-100 shadow-xs bg-white transition hover:bg-zinc-50">
                      Назад
                    </button>
                    <button type="button" className="max-sm:w-full max-sm:justify-center whitespace-nowrap flex items-center cursor-pointer h-9.5 px-4 rounded-lg border-2 border-zinc-950 shadow-xs bg-zinc-800 text-white transition hover:brightness-125">
                      Следующий урок
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 shrink-0 border-l border-zinc-200 relative">
          <div className="h-16 shrink-0 bg-white border-b border-zinc-200">
            <div className="container h-full">
              <ul className="flex h-full relative">
                <li className="h-0.5 w-10 absolute bg-zinc-950 bottom-0 transition-all left-10"></li>
                <li>
                  <button type="button" className="cursor-pointer fonot-medium px-4 text-sm text-zinc-500 aria-[current=true]:text-zinc-950 h-full flex items-center" aria-current="true">
                    Содержание
                  </button>
                </li>
                <li>
                  <button type="button" className="cursor-pointer fonot-medium px-4 text-sm text-zinc-500 aria-[current=true]:text-zinc-950 h-full flex items-center">
                    Обсуждения
                  </button>
                </li>
                <li>
                  <button type="button" className="cursor-pointer fonot-medium px-4 text-sm text-zinc-500 aria-[current=true]:text-zinc-950 h-full flex items-center">
                    Файлы
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute right-4 bottom-4 group">
            <button type="button" className=" flex items-center justify-center cursor-pointer size-9.5 rounded-full border-2 border-zinc-950 shadow-xs bg-zinc-800 text-white transition hover:brightness-125">
              <i className="text-lg ri-question-mark"></i>
            </button>
            <span className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-md absolute right-0 bottom-full mb-3 bg-white shadow shadow-zinc-100 border border-zinc-200 px-4 py-2.5 rounded-md before:size-2.5 before:bg-white before:absolute before:right-3.5 before:-bottom-1.5 before:-rotate-135 before:border-l before:border-t before:border-zinc-200 before:rounded-tl-sm">
              <span className="text-sm font-medium">Задать вопрос AiTeacher</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
