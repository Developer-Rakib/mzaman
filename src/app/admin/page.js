"use client";
import { useState, useRef, useEffect } from "react";
import { Editor, EditorState, RichUtils, convertToRaw, Modifier } from "draft-js";
import { stateToHTML } from "draft-js-export-html"; // Convert Draft.js content to HTML
import "draft-js/dist/Draft.css";

// Custom font size styles
const styleMap = {
    SMALL: { fontSize: "12px" },
    MEDIUM: { fontSize: "16px" },
    LARGE: { fontSize: "20px" },
};
export default function Page() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editorRef = useRef(null);

    // Handle text formatting (bold, italic)
    const handleStyleChange = (style) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    // Handle block formatting (lists)
    const handleBlockChange = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    // Handle font size changes
    const toggleFontSize = (size) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, size));
    };

    // Add a link to the selected text
    const addLink = () => {
        const url = prompt("Enter the URL:"); // Get URL from the user
        if (!url) return;

        const contentState = editorState.getCurrentContent();
        const selection = editorState.getSelection();

        // Create an entity for the link
        const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", { url });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        // Apply the entity to selected text
        const newContentState = Modifier.applyEntity(contentStateWithEntity, selection, entityKey);
        setEditorState(EditorState.push(editorState, newContentState, "apply-entity"));
    };


    // Convert editor content to HTML
    // Convert editor content to HTML
    const getHTML = () => {
        const contentState = editorState.getCurrentContent();
        return stateToHTML(contentState, {
            entityStyleFn: (entity) => {
                const data = entity.getData();
                if (entity.getType() === "LINK") {
                    return { element: "a", attributes: { href: data.url, target: "_blank" } };
                }
                return undefined;
            },
            inlineStyleFn: (style) => {
                if (style.has("SMALL")) {
                    return { element: "span", style: { fontSize: "12px" } };
                }
                if (style.has("MEDIUM")) {
                    return { element: "span", style: { fontSize: "16px" } };
                }
                if (style.has("LARGE")) {
                    return { element: "span", style: { fontSize: "20px" } };
                }
            },
        });
    };
    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.focus();
        }
    }, []); // Focus the editor when the component mounts

    console.log(getHTML());
    return (
        <div className="border p-4 mt-52 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold mb-2">Draft.js Rich Text Editor</h2>

            {/* Formatting Buttons */}
            <div className="mb-2 space-x-2">
                <button onClick={() => handleStyleChange("BOLD")} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                    Bold
                </button>
                <button onClick={() => handleStyleChange("ITALIC")} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                    Italic
                </button>
                <button onClick={() => handleBlockChange("unordered-list-item")} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                    Bullet List
                </button>
                <button onClick={() => handleBlockChange("ordered-list-item")} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                    Numbered List
                </button>
                <button onClick={addLink} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add Link
                </button>
            </div>

            {/* Font Size Buttons */}
            <div className="mb-2 space-x-2">
                <button onClick={() => toggleFontSize("SMALL")}>Small</button>
                <button onClick={() => toggleFontSize("MEDIUM")}>Medium</button>
                <button onClick={() => toggleFontSize("LARGE")}>Large</button>
            </div>

            {/* Editor Container */}
            <div className="border p-3 min-h-[150px] cursor-text rounded" onClick={() => editorRef.current?.focus()}>
                <Editor ref={editorRef} editorState={editorState} onChange={setEditorState} customStyleMap={styleMap} />
            </div>

            {/* Button to Get HTML Output */}
            <button onClick={() => alert(getHTML())} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                Get HTML Output
            </button>


            <h3>Generated HTML:</h3>
            <div dangerouslySetInnerHTML={{ __html: getHTML() }} />

            {/* <p><span style="font-size: 20px"><strong>Ultimate MS Office Journey: Excel থেকে Power BI পর্যন্ত MS Office-এর পূর্ণাঙ্গ জার্নি!</strong></span></p>
            <p>আপনি &nbsp;কি মাইক্রোসফট অফিসের এক্সেল, ওয়ার্ড, এবং পাওয়ার পয়েন্টের বেসিক থেকে &nbsp;অ্যাডভান্স স্কিল অর্জন করতে চান? অথবা ডেটা অ্যানালাইসিস এবং &nbsp;ভিজ্যুয়ালাইজেশনের অসাধারণ দুনিয়ায় Power BI-এর মতো টুল দিয়ে নিজের &nbsp;ক্যারিয়ারকে নতুন উচ্চতায় নিয়ে যেতে চান? তাহলে এই কোর্স আপনার জন্য একদম &nbsp;পারফেক্ট!</p>
            <p>আপনি চাইলে শুধুমাত্র <strong>MS Excel লাইভ কোর্সেও</strong> অংশ নিতে পারবেন। বিস্তারিত জানতে পুরো লেখা পড়ুন।</p>
            <p><strong>✅ ৫৯ তম ব্যাচের ক্লাস শুরু হবে ০৬ মার্চ ২০২৫ইং থেকে।</strong></p>
            <p><strong>✅ ক্লাস সময়সূচী</strong></p>
            <ul>
                <li><strong>রাত ১০:১৫ থেকে ১১:০০ মিনিট পর্যন্ত। (বি:দ্র: </strong>রমজান &nbsp;মাস শেষ হওয়ার পর, অর্থাৎ ঈদের পরে, ক্লাসের সময়সূচি পরিবর্তিত হবে। &nbsp;নতুন সময়সূচি হবে রাত ৯:৩০ থেকে ১১:০০ পর্যন্ত অনুষ্ঠিত হবে।)</li>
                <li><strong>এক্সেলের ক্লাস হবে প্রতি বুধবার এবং বৃহস্পতিবার। </strong>যদি আপনি <strong>Power BI and Query</strong> এ ও ভর্তি হতে চান তাহলে প্রথমে এক্সেলের ক্লাস হবে, এক্সেলের সমস্ত ক্লাস শেষ হলে <strong>Power Query এবং Power BI</strong> এর ক্লাস শুরু হবে। <strong>Power Query এবং Power BI</strong> এর ক্লাস হবে <strong>শুক্রবার, সোমবার এবং বুধবার</strong>।</li>
                <li>পাওয়ারপয়েন্ট এবং ওয়ার্ডের <strong>Only Recorded Videos</strong> দেওয়া হবে। কোন লাইভ ক্লাস হবেনা।</li>
            </ul>
            <p>✅ <strong>ক্লাস সংখ্যা</strong></p>
            <ul>
                <li><strong>MS Excel</strong> – সর্বনিম্ন ১৬টি থেকে সর্বোচ্চ ২৪টি ক্লাস হবে।</li>
                <li><strong>Power Query and BI</strong> - মিনিমাম ১২টি ক্লাস হবে।</li>
                <li><strong>MS PowerPoint</strong> - মিনিমাম ১০টি লাইভ ক্লাসের রেকর্ডেড ভিডিও।</li>
                <li><strong>MS Word</strong> - মিনিমাম ১০টি লাইভ ক্লাসের রেকর্ডেড ভিডিও।</li>
            </ul>
            <h3><strong>📘 কোর্সের মডিউল</strong></h3>
            <p>বিস্তারিত মডিউল দেখতে ক্লিক করুন:</p>
            <ul>
                <li>MS Excel – <a href="facebool.com" target="_blank"><u>এখানে ক্লিক করুন</u></a></li>
                <li>MS PowerPoint – <a href="https://drive.google.com/file/d/1uEzfo4YYyKRNFbxLORECz9VfI-b5aaog/view?usp=sharing" target="_blank"><u>এখানে ক্লিক করুন</u></a></li>
                <li>MS Word – <a href="https://drive.google.com/file/d/12Kz-ksD3fmGLQN5Pl7pRd_cyXLg9lfxG/view?usp=sharing" target="_blank"><u>এখানে ক্লিক করুন</u></a></li>
                <li>Power Query and BI - <a href="https://drive.google.com/file/d/1SDx4E1WfKEbwo1gz39uuG0cXUyzP0tKB/view?usp=sharing" target="_blank"><u>এখানে ক্লিক করুন</u></a></li>
            </ul> */}





        </div>
    );
}
