const documentation = {
    "Data structures": {
        "visible": true,
        "isTitle": true
    },
    "variablePresets": {
        "visible": true,
        "content": `<div>Object that determines preset variables to avoid needing to wait for the handshake to complete before getting information.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer">{
    <span style="color:var(--theme-string)">"VARIABLE NAME"</span>: <span style="color:var(--theme-global)">VALUE</span>
}</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>({<span style="color:var(--theme-string)">"☁ Cloud variable"</span>: <span style="color:var(--theme-global)">1</span>})
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div>`,
    },
    "replyOptions": {
        "visible": true,
        "content": `<div>Object that determines options for replying when posting a comment, used in both the Studio() and Project() functions.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer">{
    <span style="color:var(--theme-string);">"parent"</span>: <span style="color:var(--theme-string);">"PARENT COMMENT ID"</span>,
    <span style="color:var(--theme-string);">"commentee"</span>: <span style="color:var(--theme-string);">"PARENT COMMENT AUTHOR ID"</span>
}
</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">postComment</span>(<span style="color:var(--theme-string);">"Comment content"</span>, {<span style="color:var(--theme-string);">"parent"</span>: <span style="color:var(--theme-string);">"PARENT COMMENT ID"</span>,<span style="color:var(--theme-string);">"commentee"</span>: <span style="color:var(--theme-string);">"PARENT COMMENT AUTHOR ID"</span>})
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "Methods and functions": {
        "visible": true,
        "isTitle": true
    },
    "javaScratch docs": {
        "visible": false,
        "hideFromFilter": true,
        "content": "<div>Welcome to the docs - all of javaScratch's functions are documented here. Use the sidebar on the right to navigate.</div>"
    },
    "Unknown": {
        "visible": false,
        "hideFromFilter": true,
        "content": "<div>The structure of this value is unknown</div>"
    },
    "Session()": {
        "visible": true,
        "content": "<div>Session constructor function</div>",
        "children": [
            "xmlParser",
            "frontPage",
            "onReady()",
            "onFail()",
            "initialize()",
            "end()",
            "Project()",
            "Studio()",
            "User()",
            "Self()"
        ]
    },
    "xmlParser": {
        "visible": false,
        "content": `<div>Collection of XML parsers for parsing data from the <span class="codeSmall">site-api</span> API. It handles the output of function found in the <span class="codeSmall"><button class="docsLink" data-sidebarId="xmlProfile">xmlProfile</button></span> collection.</div>`,
        "children": [
            "profileComments()",
            "profileActivity()",
            "profileFeatured()",
            "collections()"
        ]
    },
    "profileComments()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function that parses a valid the response from the <span class="codeSmall">site-api</span> comments API found on profiles.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">profileComments</span>(<span style="color:#000;">data</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color:#000;">self</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">Self</span>()
    <span style="color:#000;">self</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getComments</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileComments</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"COMMENT ID"</span>,
        <span style="color:var(--theme-string);">"authorString"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"content"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>,
        <span style="color:var(--theme-string);">"replies"</span>: [
            {
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"COMMENT ID"</span>,
                <span style="color:var(--theme-string);">"authorString"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
                <span style="color:var(--theme-string);">"content"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>
            }
        ]
    }
]
</div></div></div>`
    },
    "profileActivity()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function that parses a valid the response from the <span class="codeSmall">site-api</span> profile activity API found on profiles.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">data</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color:#000;">self</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">Self</span>()
    <span style="color:#000;">self</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getActivity</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"action"</span>: <span style="color:var(--theme-string);">"ACTION"</span>,
        <span style="color:var(--theme-string);">"actor"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"time"</span>: <span style="color:var(--theme-string);">"TIME SINCE"</span>,
        <span style="color:var(--theme-string);">"targets"</span>: [
            <span style="color:var(--theme-global);">...[TARGETS]</span>
        ]
    }
]
</div></div></div>`
    },
    "profileFeatured()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function that parses a valid profile page and extracts the featured project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">profileFeatured</span>(<span style="color:#000;">data</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color:#000;">self</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">Self</span>()
    <span style="color:#000;">self</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getProfile</span>().<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileFeatured</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">{
    <span style="color:var(--theme-string);">"id"</span>:<span style="color:var(--theme-string);">"879395426"</span>,
    <span style="color:var(--theme-string);">"label"</span>:<span style="color:var(--theme-string);">"LABEL"</span>
}
</div></div></div>`
    },
    "collections()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function that parses a valid collections page (e.g. shared projects page, followers page, studios page) and returns an array consisting of ids/usernames.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">collections</span>(<span style="color:#000;">data</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color:#000;">self</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">Self</span>()
    <span style="color:#000;">self</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getFollowedUsers</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">collections</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    <span style="color:var(--theme-string);">'/users/USERNAME/'</span>
]
</div></div></div>`
    },
    "frontPage": {
        "visible": false,
        "content": `<div>Collection of functions for getting information found on the front page that is accessible to everyone (this excludes things such as the "Projects Loved by Scratchers I'm Following" and "What's Happening?" sections of the front page).</div>`,
        "children": [
            "getFrontpaged()",
            "getNews()"
        ]
    },
    "getFrontpaged()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets information about the front page, including newest projects, top remixed, Scratch Design Studio, curated projects, featured studios, top loved, and featured projects.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFrontpaged</span>()</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">session</span>.<span style="color:#000;">frontPage</span>.<span style="color: var(--theme-function)">getFrontpaged</span>().<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">{
        <span style="color:var(--theme-string);">"community_newest_projects"</span>:
        [
            {
                <span style="color:var(--theme-string);">"thumbnail_url"</span>: <span style="color:var(--theme-string);">"//uploads.scratch.mit.edu/projects/thumbnails/PROJECT ID.png"</span>,
                <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">TITLE</span>,
                <span style="color:var(--theme-string);">"creator"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
                <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"project"</span>,
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
                <span style="color:var(--theme-string);">"love_count"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>
            }
        ],
            <span style="color:var(--theme-string);">"community_most_remixed_projects"</span>:
        [
            {
                <span style="color:var(--theme-string);">"thumbnail_url"</span>: <span style="color:var(--theme-string);">"//uploads.scratch.mit.edu/projects/thumbnails/PROJECT ID.png"</span>,
                <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">TITLE</span>,
                <span style="color:var(--theme-string);">"creator"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
                <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"project"</span>,
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
                <span style="color:var(--theme-string);">"love_count"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>
            }
        ],
            <span style="color:var(--theme-string);">"scratch_design_studio"</span>:
        [
            {
                <span style="color:var(--theme-string);">"thumbnail_url"</span>: <span style="color:var(--theme-string);">"//uploads.scratch.mit.edu/projects/thumbnails/PROJECT ID.png"</span>,
                <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">TITLE</span>,
                <span style="color:var(--theme-string);">"creator"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
                <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"project"</span>,
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
                <span style="color:var(--theme-string);">"love_count"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>
            }
        ],
            <span style="color:var(--theme-string);">"curator_top_projects"</span>:
        [
            {
                <span style="color:var(--theme-string);">"thumbnail_url"</span>: <span style="color:var(--theme-string);">"//uploads.scratch.mit.edu/projects/thumbnails/PROJECT ID.png"</span>,
                <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">TITLE</span>,
                <span style="color:var(--theme-string);">"creator"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
                <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"project"</span>,
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
                <span style="color:var(--theme-string);">"love_count"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>
            }
        ],
            <span style="color:var(--theme-string);">"community_featured_studios"</span>:
        [
            {
                <span style="color:var(--theme-string);">"thumbnail_url"</span>: <span style="color:var(--theme-string);">"//uploads.scratch.mit.edu/projects/thumbnails/STUDIO ID.png"</span>,
                <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"gallery"</span>,
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">STUDIO ID</span>,
                <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
            }
        ],
            <span style="color:var(--theme-string);">"community_most_loved_projects"</span>:
        [
            {
                <span style="color:var(--theme-string);">"thumbnail_url"</span>: <span style="color:var(--theme-string);">"//uploads.scratch.mit.edu/projects/thumbnails/PROJECT ID.png"</span>,
                <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">TITLE</span>,
                <span style="color:var(--theme-string);">"creator"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
                <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"project"</span>,
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
                <span style="color:var(--theme-string);">"love_count"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>
            }
        ],
            <span style="color:var(--theme-string);">"community_featured_projects"</span>:
        [
            {
                <span style="color:var(--theme-string);">"thumbnail_url"</span>: <span style="color:var(--theme-string);">"//uploads.scratch.mit.edu/projects/thumbnails/PROJECT ID.png"</span>,
                <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
                <span style="color:var(--theme-string);">"creator"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
                <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"project"</span>,
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
                <span style="color:var(--theme-string);">"love_count"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>
            }
        ]
    }
</div></div></div>`
    },
    "getNews()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the content of the "Scratch News" panel on the front page.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getNews</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">session</span>.<span style="color:#000;">frontPage</span>.<span style="color: var(--theme-function)">getNews</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color: var(--theme-global)">NEWS ID</span>,
        <span style="color:var(--theme-string);">"stamp"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"headline"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"url"</span>: <span style="color:var(--theme-string);">"URL"</span>,
        <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"copy"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>
    }
]</div></div>`
    },
    "onReady()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>The callback function for successful initialisation.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onReady</span>()</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    //Success code
    <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string);">"Ready!"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Ready!</span></div></div>`
    },
    "onFail()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>The callback function for failed initialisation.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onFail</span>()
<span style="color:var(--theme-function);">onFail</span>(<span style="color:#000;">message</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onFail</span> = (<span style="color:#000;">message</span>) => {
    //Failure code
    <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string);">"ERROR! Message: "</span> + <span style="color:#000;">message</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">ERROR! Message: Already logged in</span>
</div></div>`
    },
    "initialize()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function cannot be used if the session has already been initialised (Unless <span class="codeSmall">Session().end()</span> is run first)</span>
<div>Function that initialises the session by getting a session token from the login API. It requires the username and password of an existing user to have been set when creating the session.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">initialize</span>()</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string);">"Initialised!"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Initialised!</span>
</div></div>`
    },
    "end()": {
        "visible": false,
        "content": `
<div>Function that initialises the session by getting a session token from the login API. It requires the username and password of an existing user to have been set when creating the session.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">initialize</span>()</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">let</span> <span style="color:#000;">count</span> = <span style="color:var(--theme-global);">0</span>
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">count</span>++
    <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color: #000;">count</span>)
    <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">end</span>()
    <span style="color:#000;">count</span> === <span style="color:var(--theme-global);">1</span> && <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">1</span>
<span style="color: #000">2</span>
</div></div>`
    },
    "Project()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Project constructor function for interacting with projects.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">Project</span>(<span style="color:#000;">projectId</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)</div></div></div><h3 style="text-shadow: none; margin-top: 8px">Properties:</h3>
<div><h3 style="text-shadow: none; font-size: 17px"><span class="codeSmall">id</span></h3><br>
Value is the ID of the specified project. This is a writable value - if changed, the targeted project will also change.
<div class="codeDemo"><h3>Format</h3><div class="codeDemoContainer" style="color:#bfbfbf;"><span style="color:var(--theme-string);">"PROJECT ID"</span></div></div>
</div>`,
        "children": [
            "setData()",
            "setThumbnail()",
            "getMeta()",
            "getRemixes()",
            "getStudios()",
            "getComments()",
            "getCommentReplies()",
            "getData()",
            "removeComment()",
            "postComment()",
            "postFavorite()",
            "postLove()",
            "getCloudLogs()",
            "CloudSocket()"
        ]
    },
    "setData()": {
        "visible": false,
        "content": `<div>Function to set all data about the project, including scripts, description, title, etc.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">setData</span>(<span style="color:#000;">data</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">setData</span>(<span style="color:var(--theme-global);">{PROJECT DATA}</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "setThumbnail()": {
        "visible": false,
        "content": `<div>Function to set the thumbnail of the project. It takes a stringified PNG.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">setThumbnail</span>(<span style="color:#000;">pngString</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">setThumbnail</span>(<span style="color:var(--theme-string);">"PNG DATA"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "getMeta()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function that gets meta information about the project.</div><div>Gets meta information about the project, e.g. who the creator is.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getMeta</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color: var(--theme-function)">getMeta</span>().<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">{
    <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">123456789</span>,
    <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
    <span style="color:var(--theme-string);">"description"</span>: <span style="color:var(--theme-string);">"DESCRIPTION"</span>,
    <span style="color:var(--theme-string);">"instructions"</span>: <span style="color:var(--theme-string);">"INSTRUCTIONS"</span>,
    <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,
    <span style="color:var(--theme-string);">"public"</span>: <span style="color:var(--theme-global);">true</span>,
    <span style="color:var(--theme-string);">"comments_allowed"</span>: <span style="color:var(--theme-global);">true</span>,
    <span style="color:var(--theme-string);">"is_published"</span>: <span style="color:var(--theme-global);">true</span>,
    <span style="color:var(--theme-string);">"author"</span>: {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">97654321</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
        <span style="color:var(--theme-string);">"history"</span>: {
        <span style="color:var(--theme-string);">"joined</span>": <span style="color:var(--theme-string);">"TIMESTAMP"</span>
    },
        <span style="color:var(--theme-string);">"profile"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">null</span>,
            <span style="color:var(--theme-string);">"images"</span>: {
                <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
            }
        }
    },
    <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
    <span style="color:var(--theme-string);">"images"</span>: {
        <span style="color:var(--theme-string);">"282x218"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"216x163"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"200x200"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"144x108"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"135x102"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"100x80"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
    },
        <span style="color:var(--theme-string);">"history"</span>: {
        <span style="color:var(--theme-string);">"created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"shared"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
    },
    <span style="color:var(--theme-string);">"stats"</span>: {
        <span style="color:var(--theme-string);">"views"</span>: <span style="color:var(--theme-global);">VIEW COUNT</span>,
        <span style="color:var(--theme-string);">"loves"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>,
        <span style="color:var(--theme-string);">"favorites"</span>: <span style="color:var(--theme-global);">FAVORITE COUNT</span>,
        <span style="color:var(--theme-string);">"remixes"</span>: <span style="color:var(--theme-global);">REMIX COUNT</span>
    },
    <span style="color:var(--theme-string);">"remix"</span>: {
        <span style="color:var(--theme-string);">"parent"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>,
        <span style="color:var(--theme-string);">"root"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>
    },
    <span style="color:var(--theme-string);">"project_token"</span>: <span style="color:var(--theme-string);">"TOKEN"</span>
}</div></div></div>`
    },
    "getRemixes()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function to get the remixes of the project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getRemixes</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color: var(--theme-function)">getRemixes</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">123456789</span>,
        <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"description"</span>: <span style="color:var(--theme-string);">"DESCRIPTION"</span>,
        <span style="color:var(--theme-string);">"instructions"</span>: <span style="color:var(--theme-string);">"INSTRUCTIONS"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,
        <span style="color:var(--theme-string);">"public"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"comments_allowed"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"is_published"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">97654321</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined</span>": <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
            <span style="color:var(--theme-string);">"profile"</span>: {
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">null</span>,
                <span style="color:var(--theme-string);">"images"</span>: {
                    <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
                }
            }
        },
        <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"images"</span>: {
            <span style="color:var(--theme-string);">"282x218"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"216x163"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"200x200"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"144x108"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"135x102"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"100x80"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"shared"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"stats"</span>: {
            <span style="color:var(--theme-string);">"views"</span>: <span style="color:var(--theme-global);">VIEW COUNT</span>,
            <span style="color:var(--theme-string);">"loves"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>,
            <span style="color:var(--theme-string);">"favorites"</span>: <span style="color:var(--theme-global);">FAVORITE COUNT</span>,
            <span style="color:var(--theme-string);">"remixes"</span>: <span style="color:var(--theme-global);">REMIX COUNT</span>
        },
        <span style="color:var(--theme-string);">"remix"</span>: {
            <span style="color:var(--theme-string);">"parent"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>,
            <span style="color:var(--theme-string);">"root"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>
        },
    }
]</div></div></div>`
    },
    "getStudios()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function to get the studios that the project is in.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getStudios</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color: var(--theme-function)">getStudios</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"thumbnail_url"</span>: <span style="color:var(--theme-string);">"//uploads.scratch.mit.edu/projects/thumbnails/STUDIO ID.png"</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"gallery"</span>,
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">STUDIO ID</span>,
        <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
    }
]</div></div></div>`
    },
    "getComments()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function to get the comments on the project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getComments</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color: var(--theme-function)">getComments</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">COMMENT ID</span>,
        <span style="color:var(--theme-string);">"parent_id"</span>: <span style="color:var(--theme-global);">NULL</span>,
        <span style="color:var(--theme-string);">"commentee_id"</span>: <span style="color:var(--theme-global);">NULL</span>,
        <span style="color:var(--theme-string);">"content"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>,
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"datetime_modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">AUTHOR ID</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
        <span style="color:var(--theme-string);">"reply_count":</span> <span style="color:var(--theme-global);">REPLY COUNT</span>
    }
]</div></div></div>`
    },
    "getCloudLogs()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function to get the cloud logs of the project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getComments</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color: var(--theme-function)">getComments</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"user"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"name"</span>: <span style="color:var(--theme-global);">"CLOUD VARIABLE NAME"</span>,
        <span style="color:var(--theme-string);">"value"</span>: <span style="color:var(--theme-global);">VALUE</span>,
        <span style="color:var(--theme-string);">"verb"</span>: <span style="color:var(--theme-string);">"set/delete/create"</span>,
    }
]</div></div></div>`
    },
    "getCommentReplies()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function to get the replies of a comment on the project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getCommentReplies</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>, <span style="color:#000;">commentId</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color: var(--theme-function)">getCommentReplies</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>, <span style="color: var(--theme-string)">"987654321"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">COMMENT ID</span>,
        <span style="color:var(--theme-string);">"parent_id"</span>: <span style="color:var(--theme-global);">ID</span>,
        <span style="color:var(--theme-string);">"commentee_id"</span>: <span style="color:var(--theme-global);">ID</span>,
        <span style="color:var(--theme-string);">"content"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>,
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"datetime_modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">AUTHOR ID</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
        <span style="color:var(--theme-string);">"reply_count":</span> <span style="color:var(--theme-global);">REPLY COUNT</span>
    }
]</div></div></div>`
    },
    "getData()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function that gets project data.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getData</span>(<span style="color:#000;">data</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">getData</span>().<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color:var(--theme-global);">{PROJECT DATA}</span></div></div></div>`
    },
    "removeComment()": {
        "visible": false,
        "content": `<div>Function to remove a specific comment from the project.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">removeComment</span>(<span style="color:#000;">commentId</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">removeComment</span>(<span style="color:var(--theme-string);">"987654321"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "postComment()": {
        "visible": false,
        "content": `<div>Function to post a comment to the project.  The optional <span class="codeSmall">replyOptions</span> parameter takes a <span class="codeSmall"><button class="docsLink" data-sidebarId="replyOptions">replyOptions</button></span> object as an argument.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">postComment</span>(<span style="color:#000;">content</span>)
<span style="color:var(--theme-function);">postComment</span>(<span style="color:#000;">content</span>, <span style="color:#000;">replyOptions</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">postComment</span>(<span style="color:var(--theme-string);">"Comment content"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`,
    },
    "postLove()": {
        "visible": false,
        "content": `<div>Function to post a love to the project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">postLove</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">postLove</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`,
    },
    "postFavorite()": {
        "visible": false,
        "content": `<div>Function to post a favorite to the project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">postFavorite</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">postFavorite</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`,
    },
    "CloudSocket()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">This function will not work if the session account is of "new Scratcher" status</span><div style="white-space: pre-wrap">Constructor function for cloud variable API interaction.

It establishes a 'websocket' or 'socket' with the cloud server (A persistent connection allowing both the server and the client to exchange packets). The socket opens automatically, however must be manually reopened if disconnected.

Note that you will need to use the cloud emoji in your code when referencing a cloud variable, e.g. <span class="codeSmall">setVar("☁ Cloud variable", 123)</span>, not <span class="codeSmall">setVar("Cloud variable", 123)</span>.

The optional <span class="codeSmall">variablePresets</span> parameter takes a <span class="codeSmall"><button class="docsLink" data-sidebarId="variablePresets">variablePresets</button></span> object as an argument
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">CloudSocket</span>()
<span style="color:var(--theme-function);">CloudSocket</span>(<span style="color:#000;">variablePresets</span>)</div></div><div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>
<h3 style="text-shadow: none; margin-top: 8px">Properties:</h3>
<div><h3 style="text-shadow: none; font-size: 17px"><span class="codeSmall">variables</span></h3><br>
An object containing key-value pairs of variable names and their values
<div class="codeDemo"><h3>Format</h3><div class="codeDemoContainer" style="color:#bfbfbf;">{
    <span style="color:var(--theme-string);">"KEY"</span>: <span style="color:var(--theme-global);">VALUE</span>
}</div></div>
</div>`,
        "children": [
            "onOpen()",
            "onMessage()",
            "onError()",
            "onClose()",
            "onSet()",
            "onCreate()",
            "onDelete()",
            "close()",
            "connect()",
            "setVar()",
            "createVar()",
            "deleteVar()"
        ]
    },
    "onOpen()": {
        "visible": false,
        "content": `<div>The callback function for the cloud socket connection establishing successfully.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onOpen</span>()
<span style="color:var(--theme-function);">onOpen</span>(<span style="color: #000;">event</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">onOpen</span> = () => {
        <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string)">"Socket opened!"</span>)
    }
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Socket opened!</span></div></div>`,
    },
    "onMessage()": {
        "visible": false,
        "content": `<div>The callback function for the cloud socket recieveing a message.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onMessage</span>()
<span style="color:var(--theme-function);">onMessage</span>(<span style="color: #000;">event</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">onMessage</span> = () => {
        <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string)">"Socket received a message!"</span>)
    }
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Socket received a message!</span></div></div>`
    },
    "onError()": {
        "visible": false,
        "content": `<div>The callback function for the cloud socket encountering an error.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onError</span>()
<span style="color:var(--theme-function);">onError</span>(<span style="color: #000;">event</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">onError</span> = () => {
        <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string)">"Socket encountered an error!"</span>)
    },
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Socket encountered an error!</span></div></div>`
    },
    "onClose()": {
        "visible": false,
        "content": `<div>The callback function for the cloud socket being closed.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onClose</span>()
<span style="color:var(--theme-function);">onClose</span>(<span style="color: #000;">event</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">onClose</span> = () => {
        <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string)">"Socket closed!"</span>)
    }
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Socket closed!</span></div></div>`
    },
    "onSet()": {
        "visible": false,
        "content": `<div>The callback function for a variable being set.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onSet</span>()
<span style="color:var(--theme-function);">onSet</span>(<span style="color: #000;">event</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">onSet</span> = () => {
        <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string)">"Variable set!"</span>)
    }
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Variable set!</span></div></div>`
    },
    "onCreate()": {
        "visible": false,
        "content": `<div>The callback function for a variable being created.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onCreate</span>()
<span style="color:var(--theme-function);">onCreate</span>(<span style="color: #000;">event</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">onCreate</span> = () => {
        <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string)">"Variable created!"</span>)
    }
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Variable created!</span></div></div>`
    },
    "onDelete()": {
        "visible": false,
        "content": `<div>The callback function for a variable being deleted.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">onDelete</span>()
<span style="color:var(--theme-function);">onDelete</span>(<span style="color: #000;">event</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">onDelete</span> = () => {
        <span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:var(--theme-string)">"Variable deleted!"</span>)
    }
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput"><span style="color: #000">Variable deleted!</span></div></div>`
    },
    "close()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">This function will not work if the session account is of "new Scratcher" status</span><div>Function to close the cloud socket connection.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">close</span>()</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">close</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div>`
    },
    "setVar()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">This function will not work if the session account is of "new Scratcher" status</span><div>Function to set the value of a cloud variable. It will not work if a string is provided as an argument for the <span class="codeSmall">value</span> parameter.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">setVar</span>(<span style="color:#000;">varName</span>, <span style="color:#000;">value</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">setVar</span>(<span style="color:var(--theme-string)">"☁ Cloud variable"</span>, <span style="color:var(--theme-global)">123</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div>`
    },
    "createVar()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">The changes that this function makes are not permanent</span><span class="docsBanner" style="background: var(--warn-banner)">This function will not work if the session account is of "new Scratcher" status</span><div>Function to create a cloud variable.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">createVar</span>(<span style="color:#000;">varName</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">createVar</span>(<span style="color:var(--theme-string)">"☁ Cloud variable"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div>`
    },
    "deleteVar()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">The changes that this function makes are not permanent</span><span class="docsBanner" style="background: var(--warn-banner)">This function will not work if the session account is of "new Scratcher" status</span><div>Function to delete a cloud variable.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">delete</span>(<span style="color:#000;">varName</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">deleteVar</span>(<span style="color:var(--theme-string)">"☁ Cloud variable"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div>`
    },
    "connect()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">This function will not work if the session account is of "new Scratcher" status</span><div>Function to re-open the cloud socket connection.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">connect</span>()</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">project</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Project</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:var(--theme-def);">const</span> <span style="color: #000">socket</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">project</span>.<span style="color:var(--theme-function);">CloudSocket</span>()
    <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">onOpen</span> = () => {
        <span style="color:#000;">socket</span>.<span style="color:var(--theme-function);">close</span>()
    }
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div>`
    },
    "Studio()": {
        "visible": false,
        "content": `<div>Studio constructor function for interacting with studios.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">Studio</span>(<span style="color:#000;">studioId</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)</div></div></div><h3 style="text-shadow: none; margin-top: 8px">Properties:</h3>
<div><h3 style="text-shadow: none; font-size: 17px"><span class="codeSmall">id</span></h3><br>
Value is the ID of the specified studio. This is a writable value - if changed, the targeted studio will also change.
<div class="codeDemo"><h3>Format</h3><div class="codeDemoContainer" style="color:#bfbfbf;"><span style="color:var(--theme-string);">"STUDIO ID"</span></div></div>
</div>`,
        "children": [
            "setMeta()",
            "Studio: getMeta()",
            "Studio: getComments()",
            "Studio: getCommentReplies()",
            "Studio: removeComment()",
            "Studio: postComment()",
            "getProjects()",
            "getManagers()",
            "getCurators()",
            "getActivity()",
            "postProject()",
            "removeProject()",
            "inviteUser()",
            "removeUser()",
            "promoteUser()",
            "acceptInvite()",
            "Studio: follow()",
            "Studio: unfollow()",
            "anyoneCanAdd()"
        ]
    },
    "setMeta()": {
        "visible": false,
        "content": `<div>Sets meta information about a studio, e.g. description, title, etc.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">setMeta</span>(<span style="color:#000;">data</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">setMeta</span>({<span style="color:var(--theme-string);">"description"</span>:<span style="color:var(--theme-string);">"Description"</span>})
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
</div></div>
</div>`
    },
    "Studio: getMeta()": {
        "visible": false,
        "name": "getMeta()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function that gets meta information about the studio, e.g. description, title, etc.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getMeta</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color: var(--theme-function)">getMeta</span>().<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">{
    <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">STUDIO ID</span>,
    <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
    <span style="color:var(--theme-string);">"host"</span>: <span style="color:var(--theme-global);">AUTHOR ID</span>,
    <span style="color:var(--theme-string);">"description"</span>: <span style="color:var(--theme-string);">"DESCRIPTION"</span>,
    <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,
    <span style="color:var(--theme-string);">"public"</span>: <span style="color:var(--theme-global);">true</span>,
    <span style="color:var(--theme-string);">"open_to_all"</span>: <span style="color:var(--theme-global);">true</span>,
    <span style="color:var(--theme-string);">"comments_allowed"</span>: <span style="color:var(--theme-global);">true</span>,
    <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
    <span style="color:var(--theme-string);">"history"</span>: {
        <span style="color:var(--theme-string);">"created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
    },
    <span style="color:var(--theme-string);">"stats"</span>: {
        <span style="color:var(--theme-string);">"comments"</span>: <span style="color:var(--theme-global);">VALUE</span>,
        <span style="color:var(--theme-string);">"followers"</span>: <span style="color:var(--theme-global);">VALUE</span>,
        <span style="color:var(--theme-string);">"managers"</span>: <span style="color:var(--theme-global);">VALUE</span>,
        <span style="color:var(--theme-string);">"projects"</span>: <span style="color:var(--theme-global);">VALUE</span>
    }
}</div></div></div>`
    },
    "Studio: getComments()": {
        "visible": false,
        "name": "getComments()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function to get the comments on the project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getComments</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color: var(--theme-function)">getComments</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">COMMENT ID</span>,
        <span style="color:var(--theme-string);">"parent_id"</span>: <span style="color:var(--theme-global);">NULL</span>,
        <span style="color:var(--theme-string);">"commentee_id"</span>: <span style="color:var(--theme-global);">NULL</span>,
        <span style="color:var(--theme-string);">"content"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>,
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"datetime_modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">AUTHOR ID</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
        <span style="color:var(--theme-string);">"reply_count":</span> <span style="color:var(--theme-global);">REPLY COUNT</span>
    }
]</div></div></div>`
    },
    "Studio: getCommentReplies()": {
        "visible": false,
        "name": "getCommentReplies()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function to get the replies of a comment on the project.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getCommentReplies</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>, <span style="color:#000;">commentId</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color: var(--theme-function)">getCommentReplies</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>, <span style="color: var(--theme-string)">"987654321"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">COMMENT ID</span>,
        <span style="color:var(--theme-string);">"parent_id"</span>: <span style="color:var(--theme-global);">ID</span>,
        <span style="color:var(--theme-string);">"commentee_id"</span>: <span style="color:var(--theme-global);">ID</span>,
        <span style="color:var(--theme-string);">"content"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>,
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"datetime_modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">AUTHOR ID</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
        <span style="color:var(--theme-string);">"reply_count":</span> <span style="color:var(--theme-global);">REPLY COUNT</span>
    }
]</div></div></div>`
    },
    "Studio: removeComment()": {
        "visible": false,
        "name": "removeComment()",
        "content": `<div>Function to remove a specific comment from the studio. Note that this will not work if the logged-in account and the comment poster are different or if the logged-in account.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">removeComment</span>(<span style="color:#000;">commentId</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">removeComment</span>(<span style="color:var(--theme-string);">"987654321"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "Studio: postComment()": {
        "visible": false,
        "name": "postComment()",
        "content": `<div>Function to post a comment to the studio. The optional <span class="codeSmall">replyOptions</span> parameter takes a <span class="codeSmall"><button class="docsLink" data-sidebarId="replyOptions">replyOptions</button></span> object as an argument.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">postComment</span>(<span style="color:#000;">content</span>)
<span style="color:var(--theme-function);">postComment</span>(<span style="color:#000;">content</span>, <span style="color:#000;">replyOptions</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">postComment</span>(<span style="color:var(--theme-string);">"Comment content"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`,
    },
    "getProjects()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the projects in the studio.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getProjects</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color: var(--theme-function)">getProjects</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
        <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"creator_id"</span>: <span style="color:var(--theme-global);">AUTHOR ID</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"avatar"</span>: {
            <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
        <span style="color:var(--theme-string);">"actor_id</span>": <span style="color:var(--theme-global);">AUTHOR ID</span>
    }
]</div></div>`
    },
    "getManagers()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the managers of the studio.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getManagers</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">getManagers</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
        {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
        <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"profile"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
            <span style="color:var(--theme-string);">"images"</span>: {
                <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
            },
            <span style="color:var(--theme-string);">"status": <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"bio": <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"country": <span style="color:var(--theme-string);">"COUNTRY"</span>
        }
    }
]</div></div>`
    },
    "getCurators()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the managers of the studio.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getCurators</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">getCurators</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
        {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
        <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"profile"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
            <span style="color:var(--theme-string);">"images"</span>: {
                <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
            },
            <span style="color:var(--theme-string);">"status": <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"bio": <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"country": <span style="color:var(--theme-string);">"COUNTRY"</span>
        }
    }
]</div></div>`
    },
    "getActivity()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the activity of the studio.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getActivity</span>(<span style="color:#000;">limit</span>)
<span style="color:var(--theme-function);">getActivity</span>(<span style="color:#000;">limit</span>, <span style="color:#000;">dateLimit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">getActivity</span>(<span style="color: var(--theme-global)">7</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"becomehoststudio-ACTION ID"</span>,
        <span style="color:var(--theme-string);">"actor_id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"actor_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"former_host_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"recipient_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"becomehoststudio"</span>,
        <span style="color:var(--theme-string);">"admin_actor"</span>: <span style="color:var(--theme-global);">false</span>
    },
    {
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"becomeownerstudio-ACTION ID"</span>,
        <span style="color:var(--theme-string);">"actor_id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"actor_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"recipient_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"becomeownerstudio"</span>
    },
    {
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"becomecurator-ACTION ID"</span>,
        <span style="color:var(--theme-string);">"actor_id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"becomecurator"</span>,
        <span style="color:var(--theme-string);">"actor_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>
    },
    {
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"removecuratorstudio-ACTION ID"</span>,
        <span style="color:var(--theme-string);">"actor_id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"removecuratorstudio"</span>,
        <span style="color:var(--theme-string);">"actor_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>
    },
    {
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"updatestudio-ACTION ID"</span>,
        <span style="color:var(--theme-string);">"actor_id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"updatestudio"</span>,
        <span style="color:var(--theme-string);">"actor_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>
    },
    {
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"removeprojectstudio-26251190"</span>,
        <span style="color:var(--theme-string);">"actor_id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"project_id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
        <span style="color:var(--theme-string);">"project_title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"removeprojectstudio"</span>,
        <span style="color:var(--theme-string);">"actor_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>
    },
    {
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"addprojecttostudio-181735986"</span>,
        <span style="color:var(--theme-string);">"actor_id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"project_id"</span>: <span style="color:var(--theme-global);">PROJECT ID</span>,
        <span style="color:var(--theme-string);">"project_title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"addprojecttostudio"</span>,
        <span style="color:var(--theme-string);">"actor_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>
    }
]</div></div>`
    },
    "postProject()": {
        "visible": false,
        "content": `<div>Function to add a project to the studio. This function will succeed only if at least one of these conditions is met: the studio has "anyone can add projects" toggled on or the logged in account is a member of the studio.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">postProject</span>(<span style="color:#000;">projectId</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">postProject</span>(<span style="color:var(--theme-string);">"987654321"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "removeProject()": {
        "visible": false,
        "content": `<div>Function to remove a specific project from the studio. Note that this requires the logged-in account to either be a manager of the studio, have created the project, or be the curator that added the project.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">removeProject</span>(<span style="color:#000;">projectId</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">removeProject</span>(<span style="color:var(--theme-string);">"987654321"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "inviteUser()": {
        "visible": false,
        "content": `<div>Function to invite a user to the studio. This function will only work if the logged-in account is a manager of the studio.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">inviteUser</span>(<span style="color:#000;">name</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">inviteUser</span>(<span style="color:var(--theme-string);">"Username"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "removeUser()": {
        "visible": false,
        "content": `<div>Function to remove a curator/manager from the studio. This function will only work if the logged-in account is a manager of the studio or if the logged-in user is the targeted user.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">removeUser</span>(<span style="color:#000;">name</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">removeUser</span>(<span style="color:var(--theme-string);">"Username"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "promoteUser()": {
        "visible": false,
        "content": `<div>Function to promote a curator of the studio to manager rank. This function will only work if the logged-in account is a manager of the studio.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">promoteUser</span>(<span style="color:#000;">name</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">promoteUser</span>(<span style="color:var(--theme-string);">"Username"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "acceptInvite()": {
        "visible": false,
        "content": `<div>Function to join the studio as a non-member. This function will only work if the logged-in account has an active invite from the studio.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">acceptInvite</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">acceptInvite</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "Studio: follow()": {
        "visible": false,
        "name": "follow()",
        "content": `<div>Function for the logged-in user to follow the studio.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">follow</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">follow</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "Studio: unfollow()": {
        "visible": false,
        "name": "unfollow()",
        "content": `<div>Function for the logged-in user to stop following the studio.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">unfollow</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">unfollow</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "anyoneCanAdd()": {
        "visible": false,
        "content": `<div>Function to toggle the "anyone can add" switch on studios. This function can only be run by studio managers.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">anyoneCanAdd</span>(<span style="color:#000;">anyone</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Studio</span>(<span style="color:var(--theme-string);">"123456789"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">studio</span>.<span style="color:var(--theme-function);">anyoneCanAdd</span>(<span style="color:var(--theme-global);">true</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "User()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>User constructor function for interacting with other users.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">User</span>(<span style="color:#000;">name</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">studio</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">User</span>(<span style="color:var(--theme-string);">"Username"</span>)</div></div></div><h3 style="text-shadow: none; margin-top: 8px">Properties:</h3>
<div><h3 style="text-shadow: none; font-size: 17px"><span class="codeSmall">username</span></h3><br>
Value is the username of the targeted user. This is a writable value - if changed, the targeted user will also change.
<div class="codeDemo"><h3>Format</h3><div class="codeDemoContainer" style="color:#bfbfbf;"><span style="color:var(--theme-string);">"USERNAME"</span></div></div>
</div>
<div style="padding-top: 8px"><h3 style="text-shadow: none; font-size: 17px"><span class="codeSmall">xmlProfile</span></h3><br>
Value is a collection of methods for interacting with the <span class="codeSmall">site-api</span> API.
<div class="codeDemo"><h3>Format</h3><div class="codeDemoContainer" style="color:#bfbfbf;"><button class="docsLink" data-sidebarId="xmlProfile">xmlProfile</button></div></div>
</div>`,
        "children": [
            "xmlProfile",
            "getSharedProjects()",
            "getFavoriteProjects()",
            "getFollowing()",
            "getFollowers()",
            "getCuratedStudios()",
            "getInfo()",
            "getMessagesCount()",
            "follow()",
            "unfollow()"
        ]
    },
    "xmlProfile": {
        "visible": false,
        "content": `<div>Collection of methods for interacting with the <span class="codeSmall">site-api</span> API. Most output is either HTML or XML and can be parsed with the <span class="codeSmall"><button class="docsLink" data-sidebarId="xmlParser">xmlParser</button></span> collection.</div>`,
        "children": [
            "XML: getComments()",
            "XML: getActivity()",
            "getProfile()",
            "XML: getProjects()",
            "XML: getFavorites()",
            "XML: getCuratedStudios()",
            "getFollowedStudios()",
            "XML: getFollowedUsers()",
            "XML: getFollowingUsers()",
            "XML: postComment()"
        ]
    },
    "XML: getComments()": {
        "visible": false,
        "name": "getComments()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">getComments()</span> functions</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to get the comments on the user's profile. It returns a HTML output interpretable by <span class="codeSmall"><button class="docsLink" data-sidebarId="profileComments()">xmlParser.profileComments()</button></span>.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getComments</span>(<span style="color:#000;">page</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getComments</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileComments</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"COMMENT ID"</span>,
        <span style="color:var(--theme-string);">"authorString"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"content"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>,
        <span style="color:var(--theme-string);">"replies"</span>: [
            {
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-string);">"COMMENT ID"</span>,
                <span style="color:var(--theme-string);">"authorString"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
                <span style="color:var(--theme-string);">"content"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>
            }
        ]
    }
]
</div></div></div>`
    },
    "XML: getActivity()": {
        "visible": false,
        "name": "getActivity()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">getActivity()</span> functions</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to the user's activity. It returns a HTML output interpretable by <span class="codeSmall"><button class="docsLink" data-sidebarId="profileActivity()">xmlParser.profileActivity()</button></span>.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getActivity</span>(<span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getActivity</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"action"</span>: <span style="color:var(--theme-string);">"ACTION"</span>,
        <span style="color:var(--theme-string);">"actor"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"time"</span>: <span style="color:var(--theme-string);">"VAGUE TIME SINCE"</span>,
        <span style="color:var(--theme-string);">"targets"</span>: [
            <span style="color:var(--theme-string);">"URL"</span>
        ]
    }
]
</div></div></div>`
    },
    "getProfile()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to get the user's profile page. The featured project and label (e.g. "Featured project", "Why I scratch", etc.) can be extracted with <span class="codeSmall"><button class="docsLink" data-sidebarId="profileFeatured()">xmlParser.profileFeatured()</button></span>. The user's featured project cannot be accesed by any other API.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getActivity</span>(<span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getActivity</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"action"</span>: <span style="color:var(--theme-string);">"ACTION"</span>,
        <span style="color:var(--theme-string);">"actor"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"time"</span>: <span style="color:var(--theme-string);">"VAGUE TIME SINCE"</span>,
        <span style="color:var(--theme-string);">"targets"</span>: [
            <span style="color:var(--theme-string);">"URL"</span>
        ]
    }
]
</div></div></div>`
    },
    "XML: getProjects()": {
        "visible": false,
        "name": "getProjects()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">getProjects()</span> functions</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to get the user's shared projects page. Output can be parsed using <span class="codeSmall"><button class="docsLink" data-sidebarId="collection()">xmlParser.collections()</button></span>.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getProjects</span>(<span style="color:#000;">page</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getProjects</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    <span style="color:var(--theme-string);">"/projects/123456789"</span>
]
</div></div></div>`
    },
    "XML: getFavorites()": {
        "visible": false,
        "name": "getFavorites()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">getFavorites()</span> functions</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to get the user's favourite projects page. Output can be parsed using <span class="codeSmall"><button class="docsLink" data-sidebarId="collection()">xmlParser.collections()</button></span>.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFavorites</span>(<span style="color:#000;">page</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getFavorites</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    <span style="color:var(--theme-string);">"/projects/123456789"</span>
]
</div></div></div>`
    },
    "XML: getCuratedStudios()": {
        "visible": false,
        "name": "getCuratedStudios()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">getCuratedStudios()</span> functions</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to get the user's curated studios projects page. Output can be parsed using <span class="codeSmall"><button class="docsLink" data-sidebarId="collection()">xmlParser.collections()</button></span>.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getCuratedStudios</span>(<span style="color:#000;">page</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getCuratedStudios</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    <span style="color:var(--theme-string);">"/studios/123456789"</span>
]
</div></div></div>`
    },
    "getFollowedStudios()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to get the user's followed studios page. Output can be parsed using <span class="codeSmall"><button class="docsLink" data-sidebarId="collection()">xmlParser.collections()</button></span>.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowedStudios</span>(<span style="color:#000;">page</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getFollowedStudios</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    <span style="color:var(--theme-string);">"/studios/123456789"</span>
]
</div></div></div>`
    },
    "XML: getFollowedUsers()": {
        "visible": false,
        "name": "getFollowedUsers()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">getFollowedUsers()</span></span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to get the user's followed users page. Output can be parsed using <span class="codeSmall"><button class="docsLink" data-sidebarId="collection()">xmlParser.collections()</button></span>.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowedUsers</span>(<span style="color:#000;">page</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getFollowedUsers</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    <span style="color:var(--theme-string);">"/users/Username"</span>
]
</div></div></div>`
    },
    "XML: getFollowingUsers()": {
        "visible": false,
        "name": "getFollowingUsers()",
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">getFollowingUsers()</span></span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><div>Function to get the user's followers page. Output can be parsed using <span class="codeSmall"><button class="docsLink" data-sidebarId="collection()">xmlParser.collections()</button></span>.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowingUsers</span>(<span style="color:#000;">page</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">getFollowingUsers</span>(<span style="color:var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">y</span>=><span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>(<span style="color:#000;">session</span>.<span style="color:#000;">xmlParser</span>.<span style="color:var(--theme-function);">profileActivity</span>(<span style="color:#000;">y</span>))))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div><div class="codeDemoOutput">[
    <span style="color:var(--theme-string);">"/users/Username"</span>
]
</div></div></div>`
    },
    "XML: postComment()": {
        "visible": false,
        "name": "postComment()",
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">getFollowingUsers()</span></span><div>Function to post a comment to the user's profile. The optional <span class="codeSmall">replyOptions</span> parameter takes a <span class="codeSmall"><button class="docsLink" data-sidebarId="replyOptions">replyOptions</button></span> object as an argument.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">postComment</span>(<span style="color:#000;">page</span>)
<span style="color:var(--theme-function);">postComment</span>(<span style="color:#000;">page</span>, <span style="color:#000;">replyOptions</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:#000;">xmlProfile</span>.<span style="color: var(--theme-function)">postComment</span>(<span style="color:var(--theme-string);">"content"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()
</div></div></div>`
    },
    "getSharedProjects()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the shared projects of the user.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getSharedProjects</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color: var(--theme-function)">getSharedProjects</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">123456789</span>,
        <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"description"</span>: <span style="color:var(--theme-string);">"DESCRIPTION"</span>,
        <span style="color:var(--theme-string);">"instructions"</span>: <span style="color:var(--theme-string);">"INSTRUCTIONS"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,
        <span style="color:var(--theme-string);">"public"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"comments_allowed"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"is_published"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">97654321</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined</span>": <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
            <span style="color:var(--theme-string);">"profile"</span>: {
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">null</span>,
                <span style="color:var(--theme-string);">"images"</span>: {
                    <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
                }
            }
        },
        <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"images"</span>: {
            <span style="color:var(--theme-string);">"282x218"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"216x163"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"200x200"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"144x108"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"135x102"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"100x80"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"shared"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"stats"</span>: {
            <span style="color:var(--theme-string);">"views"</span>: <span style="color:var(--theme-global);">VIEW COUNT</span>,
            <span style="color:var(--theme-string);">"loves"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>,
            <span style="color:var(--theme-string);">"favorites"</span>: <span style="color:var(--theme-global);">FAVORITE COUNT</span>,
            <span style="color:var(--theme-string);">"remixes"</span>: <span style="color:var(--theme-global);">REMIX COUNT</span>
        },
        <span style="color:var(--theme-string);">"remix"</span>: {
            <span style="color:var(--theme-string);">"parent"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>,
            <span style="color:var(--theme-string);">"root"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>
        },
    }
]</div></div></div>`
    },
    "getFavoriteProjects()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the favourite projects of the user.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFavoriteProjects</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color: var(--theme-function)">getFavoriteProjects</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">123456789</span>,
        <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"description"</span>: <span style="color:var(--theme-string);">"DESCRIPTION"</span>,
        <span style="color:var(--theme-string);">"instructions"</span>: <span style="color:var(--theme-string);">"INSTRUCTIONS"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,
        <span style="color:var(--theme-string);">"public"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"comments_allowed"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"is_published"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">97654321</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined</span>": <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
            <span style="color:var(--theme-string);">"profile"</span>: {
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">null</span>,
                <span style="color:var(--theme-string);">"images"</span>: {
                    <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
                }
            }
        },
        <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"images"</span>: {
            <span style="color:var(--theme-string);">"282x218"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"216x163"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"200x200"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"144x108"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"135x102"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"100x80"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"shared"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"stats"</span>: {
            <span style="color:var(--theme-string);">"views"</span>: <span style="color:var(--theme-global);">VIEW COUNT</span>,
            <span style="color:var(--theme-string);">"loves"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>,
            <span style="color:var(--theme-string);">"favorites"</span>: <span style="color:var(--theme-global);">FAVORITE COUNT</span>,
            <span style="color:var(--theme-string);">"remixes"</span>: <span style="color:var(--theme-global);">REMIX COUNT</span>
        },
        <span style="color:var(--theme-string);">"remix"</span>: {
            <span style="color:var(--theme-string);">"parent"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>,
            <span style="color:var(--theme-string);">"root"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>
        },
    }
]</div></div></div>`
    },
    "getFollowing()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the users that the user is following.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowing</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color: var(--theme-function)">getFollowing</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
        <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"profile"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
            <span style="color:var(--theme-string);">"images"</span>: {
                <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
            },
            <span style="color:var(--theme-string);">"status":</span> <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"bio"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"country"</span>: <span style="color:var(--theme-string);">"COUNTRY"</span>
        }
    }
]</div></div></div>`
    },
    "getFollowers()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the user's followers.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowers</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color: var(--theme-function)">getFollowers</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
        <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"profile"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
            <span style="color:var(--theme-string);">"images"</span>: {
                <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
            },
            <span style="color:var(--theme-string);">"status":</span> <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"bio"</span>: <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"country"</span>: <span style="color:var(--theme-string);">"COUNTRY"</span>
        }
    }
]</div></div></div>`
    },
    "getCuratedStudios()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets the studios that the user curates.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getCuratedStudios</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color: var(--theme-function)">getCuratedStudios</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color: var(--theme-string)">"id"</span>: <span style="color: var(--theme-global)">123456789</span>,
        <span style="color: var(--theme-string)">"title"</span>: <span style="color: var(--theme-string)">"TITLE"</span>,
        <span style="color: var(--theme-string)">"host"</span>: <span style="color: var(--theme-global)">987654321</span>,
        <span style="color: var(--theme-string)">"description"</span>: <span style="color: var(--theme-string)">"DESCRIPTION"</span>,
        <span style="color: var(--theme-string)">"visibility"</span>: <span style="color: var(--theme-string)">"VISIBILITY"</span>,
        <span style="color: var(--theme-string)">"public"</span>: <span style="color: var(--theme-global)">true</span>,
        <span style="color: var(--theme-string)">"open_to_all"</span>: <span style="color: var(--theme-global)">false</span>,
        <span style="color: var(--theme-string)">"comments_allowed"</span>: <span style="color: var(--theme-global)">true</span>,
        <span style="color: var(--theme-string)">"image"</span>: <span style="color: var(--theme-string)">"IMAGE URL"</span>,
        <span style="color: var(--theme-string)">"history"</span>:{
            <span style="color: var(--theme-string)">"created"</span>: <span style="color: var(--theme-string)">"TIMESTAMP"</span>,
            <span style="color: var(--theme-string)">"modified"</span>: <span style="color: var(--theme-string)">"TIMESTAMP"</span>
        },
        <span style="color: var(--theme-string)">"stats"</span>: {}
    }
]</div></div></div>`
    },
    "getInfo()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span>
<div>Function that gets meta information about the user.
<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowers</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div>
<div class="codeDemo"><h3>Example</h3><div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color: var(--theme-function)">getFollowers</span>(<span style="color: var(--theme-global)">0</span>, <span style="color: var(--theme-global)">1</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div>
<div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
        <span style="color:var(--theme-string);">"history"</span>: {
        <span style="color:var(--theme-string);">"joined"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
    },
    <span style="color:var(--theme-string);">"profile"</span>: {
    <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
    <span style="color:var(--theme-string);">"images"</span>: {
        <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
    },
    <span style="color:var(--theme-string);">"status": <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"bio": <span style="color:var(--theme-string);">"CONTENT"</span>,
            <span style="color:var(--theme-string);">"country": <span style="color:var(--theme-string);">"COUNTRY"</span>
        }
    }
]</div></div></div>`
    },
    "follow()": {
        "visible": false,
        "content": `<div>Function for the logged-in user stop following the target user.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">follow</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">follow</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "unfollow()": {
        "visible": false,
        "content": `<div>Function for the logged-in user stop following the target user.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">unfollow</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">unfollow</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "getMessagesCount()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Function that gets the messages count of the user.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getMessagesCount</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getMessagesCount</span>().<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">{
    <span style="color: var(--theme-string);">"count"</span>: <span style="color: var(--theme-global);">0</span>
}</div></div></div>`
    },
    "Self()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--good-banner)">This function can be used without the session being initialised</span><div>Self constructor function for interacting with the logged-in account's profile. Inherits from <span class="codeSmall">User</span>.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">Self</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">Self</span>()
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div><h3 style="text-shadow: none; margin-top: 8px">Properties:</h3>
<div><h3 style="text-shadow: none; font-size: 17px"><span class="codeSmall">username</span></h3><br>
Value is the username of the targeted user. This is a writable value - if changed, the targeted user will also change.
<div class="codeDemo"><h3>Format</h3><div class="codeDemoContainer" style="color:#bfbfbf;"><span style="color:var(--theme-string);">"USERNAME"</span></div></div>
</div>
<div style="padding-top: 8px"><h3 style="text-shadow: none; font-size: 17px"><span class="codeSmall">xmlProfile</span></h3><br>
Value is a collection of methods for interacting with the <span class="codeSmall">site-api</span> API.
<div class="codeDemo"><h3>Format</h3><div class="codeDemoContainer" style="color:#bfbfbf;"><button class="docsLink" data-sidebarId="Self: xmlProfile">Self: xmlProfile</button></div></div>
</div>`,
        "children": [
            "Self: xmlProfile",
            "myStuff",
            "getSharedProjects()",
            "getFavoriteProjects()",
            "getFollowing()",
            "getFollowers()",
            "getCuratedStudios()",
            "getInfo()",
            "getMessagesCount()",
            "follow()",
            "unfollow()",
            "getAccountNavJson()",
            "getSession()",
            "getMessages()",
            "shareProject()",
            "unshareProject()",
            "setAsset()",
            "Self: getActivity()",
            "getFollowedStudioProjects()",
            "getFollowedUserProjects()",
            "getFollowedUserLoves()",
            "getRecentProjects()",
            "createProject()",
            "createStudio()",
        ]
    },
    "Self: xmlProfile": {
        "visible": false,
        "name": "xmlProfile",
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">This collection has a format different to that of other <span class="codeSmall">xmlProfile</span> collections</span><div>Collection of methods for interacting with the <span class="codeSmall">site-api</span> API. Most output is either HTML or XML and can be parsed with the <span class="codeSmall"><button class="docsLink" data-sidebarId="xmlParser">xmlParser</button></span> collection.</div>`,
        "children": [
            "XML: getComments()",
            "XML: getActivity()",
            "getProfile()",
            "XML: getProjects()",
            "XML: getFavorites()",
            "XML: getCuratedStudios()",
            "getFollowedStudios()",
            "XML: getFollowedUsers()",
            "XML: getFollowingUsers()",
            "XML: postComment()",
            "XML: removeComment()",
            "toggleComments()",
        ]
    },
    "XML: removeComment()": {
        "visible": false,
        "name": "removeComment()",
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">This function returns a HTML or XML string</span><span class="docsBanner" style="background: var(--warn-banner)">This function returns a value in a format different to that of other <span class="codeSmall">removeComment()</span></span><div>Function to remove a specific comment from the logged-in account's profile.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">removeComment</span>(<span style="color:#000;">commentId</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">self</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Self</span>()
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">self</span>.<span style="color:var(--theme-function);">removeComment</span>(<span style="color:var(--theme-string);">"987654321"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "toggleComments()": {
        "visible": false,
        "content": `<div>Function to toggle commenting on the logged-in account's profile.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">toggleComments</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">self</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color:var(--theme-function);">Self</span>()
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">self</span>.<span style="color:var(--theme-function);">toggleComments</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "myStuff": {
        "visible": false,
        "content": `<div>Collection of methods for interacting with the mystuff API. Part of the <span class="codeSmall">site-api</span> API, although it returns JSON not HTML or XML.`,
        "children": [
            "MyStuff: getProjects()",
            "MyStuff: getStudios()"
        ]
    },
    "MyStuff: getProjects()": {
        "visible": false,
        "name": "getProjects()",
        "content": `<div>Function that gets the user's projects in the My Stuff page.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getProjects</span>(<span style="color:#000">page</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getProjects</span>(<span style="color:var(--theme-string)">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string)">"fields"</span>: {
            <span style="color:var(--theme-string)">"view_count"</span>: <span style="color:var(--theme-global)">VIEW COUNT</span>,
            <span style="color:var(--theme-string)">"favorite_count"</span>: <span style="color:var(--theme-global)">FAVORITE COUNT</span>,
            <span style="color:var(--theme-string)">"remixers_count"</span>: <span style="color:var(--theme-global)">LOVE COUNT</span>,
            <span style="color:var(--theme-string)">"creator"</span>: {
                <span style="color:var(--theme-string)">"username"</span>: <span style="color:var(--theme-string)">"USERNAME"</span>,
                <span style="color:var(--theme-string)">"pk"</span>: <span style="color:var(--theme-global)">USER ID</span>,
                <span style="color:var(--theme-string)">"thumbnail_url"</span>: <span style="color:var(--theme-string)">"//uploads.scratch.mit.edu/users/avatars/USER ID.png"</span>,
                <span style="color:var(--theme-string)">"admin"</span>: <span style="color:var(--theme-global)">false</span>
            },
            <span style="color:var(--theme-string)">"title"</span>: <span style="color:var(--theme-string)">"TITLE"</span>,
            <span style="color:var(--theme-string)">"isPublished"</span>: <span style="color:var(--theme-global)">false</span>,
            <span style="color:var(--theme-string)">"datetime_created"</span>: <span style="color:var(--theme-string)">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string)">"thumbnail_url"</span>: <span style="color:var(--theme-string)">"//uploads.scratch.mit.edu/projects/thumbnails/PROJECT ID.png"</span>,
            <span style="color:var(--theme-string)">"visibility"</span>: <span style="color:var(--theme-string)">"VISIBILITY"</span>,
            <span style="color:var(--theme-string)">"love_count"</span>: <span style="color:var(--theme-global)">LOVE COUNT</span>,
            <span style="color:var(--theme-string)">"datetime_modified"</span>: <span style="color:var(--theme-string)">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string)">"uncached_thumbnail_url"</span>: <span style="color:var(--theme-string)">"//cdn2.scratch.mit.edu/get_image/project/PROJECT ID_100x80.png"</span>,
            <span style="color:var(--theme-string)">"thumbnail": "PROJECT ID.png"</span>,
            <span style="color:var(--theme-string)">"datetime_shared"</span>: <span style="color:var(--theme-string)">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string)">"commenters_count"</span>: <span style="color:var(--theme-global)">COMMENT COUNT</span>
        },
        <span style="color:var(--theme-string)">"model"</span>: <span style="color:var(--theme-string)">"projects.project"</span>,
        <span style="color:var(--theme-string)">"pk"</span>: <span style="color:var(--theme-global)">PROJECT ID</span>
    }
]</div></div></div>`
    },
    "MyStuff: getStudios()": {
        "visible": false,
        "name": "getStudios()",
        "content": `<div>Function that gets the user's studios in the My Stuff page.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getStudios</span>(<span style="color:#000">page</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getStudios</span>(<span style="color:var(--theme-string)">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string)">"fields"</span>: {
            <span style="color:var(--theme-string)">"curators_count"</span>: <span style="color:var(--theme-global)">CURATORS COUNT</span>,
            <span style="color:var(--theme-string)">"projecters_count"</span>: <span style="color:var(--theme-global)">PROJECTS COUNT</span>,
            <span style="color:var(--theme-string)">"title"</span>: <span style="color:var(--theme-string)">"TITLE"</span>,
            <span style="color:var(--theme-string)">"datetime_created"</span>: <span style="color:var(--theme-string)">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string)">"thumbnail_url"</span>: <span style="color:var(--theme-string)">"//uploads.scratch.mit.edu/galleries/thumbnails/STUDIO ID.png"</span>,
            <span style="color:var(--theme-string)">"commenters_count"</span>: <span style="color:var(--theme-global)">COMMENT COUNT</span>
            <span style="color:var(--theme-string)">"datetime_modified"</span>: <span style="color:var(--theme-string)">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string)">"owner"</span>: {
                <span style="color:var(--theme-string)">"username"</span>: <span style="color:var(--theme-string)">"USERNAME"</span>,
                <span style="color:var(--theme-string)">"pk"</span>: <span style="color:var(--theme-global)">USER ID</span>,
                <span style="color:var(--theme-string)">"thumbnail_url"</span>: <span style="color:var(--theme-string)">"//uploads.scratch.mit.edu/users/avatars/USER ID.png"</span>,
                <span style="color:var(--theme-string)">"admin"</span>: <span style="color:var(--theme-global)">false</span>
            },
        },
        <span style="color:var(--theme-string)">"model"</span>: <span style="color:var(--theme-string)">"galleries.gallery"</span>,
        <span style="color:var(--theme-string)">"pk"</span>: <span style="color:var(--theme-global)">STUDIO ID</span>
    }
]</div></div></div>`
    },
    "getAccountNavJson()": {
        "visible": false,
        "content": `<div>Function that gets meta information about the logged-in account.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getAccountNavJson</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getAccountNavJson</span>().<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">{
    <span style="color:var(--theme-string)">"ADMIN"</span>: <span style="color:var(--theme-global)">false</span>,
    <span style="color:var(--theme-string)">"LOGGED_IN_USER"</span>: {
        <span style="color:var(--theme-string)">"model"</span>: {
            <span style="color:var(--theme-string)">"username"</span>: <span style="color:var(--theme-string)">"USERNAME"</span>,
            <span style="color:var(--theme-string)">"id"</span>: <span style="color:var(--theme-global)">USER ID</span>,
            <span style="color:var(--theme-string)">"thumbnail_url"</span>: <span style="color:var(--theme-string)">"//cdn2.scratch.mit.edu/get_image/user/USER ID_32x32.png"</span>,
            <span style="color:var(--theme-string)">"username_truncated"</span>: <span style="color:var(--theme-string)">"TRUNCATED USERNAME"</span>,
            <span style="color:var(--theme-string)">"profile_url"</span>: <span style="color:var(--theme-string)">"/users/USERNAME/"</span>,
            <span style="color:var(--theme-string)">"is_educator"</span>: <span style="color:var(--theme-global)">false</span>,
            <span style="color:var(--theme-string)">"is_student"</span>: <span style="color:var(--theme-global)">false</span>,
            <span style="color:var(--theme-string)">"has_outstanding_email_confirmation"</span>: <span style="color:var(--theme-global)">false</span>
        },
        <span style="color:var(--theme-string)">"options"</span>: {
            <span style="color:var(--theme-string)">"authenticated"</span>: <span style="color:var(--theme-global)">true</span>
        }
    },
    <span style="color:var(--theme-string)">"IS_SOCIAL"</span>: <span style="color:var(--theme-global)">true</span>,
    <span style="color:var(--theme-string)">"TEMPLATE_CUES"</span>: {
        <span style="color:var(--theme-string)">"welcome"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"confirmed_email"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"unsupported_browser"</span>: <span style="color:var(--theme-global)">true</span>
    }
}</div></div></div>`
    },
    "getSession()": {
        "visible": false,
        "content": `<div>Function that gets the logged-in account's session information.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getSession</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getSession</span>().<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">{
    <span style="color:var(--theme-string)">"user"</span>: {
        <span style="color:var(--theme-string)">"id"</span>: <span style="color:var(--theme-global)">USER ID</span>,
        <span style="color:var(--theme-string)">"banned"</span>:  <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"should_vpn"</span>:  <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"username"</span>: <span style="color:var(--theme-string)">"USERNAME"</span>,
        <span style="color:var(--theme-string)">"token"</span>: <span style="color:var(--theme-string)">"TOKEN"</span>,
        <span style="color:var(--theme-string)">"thumbnailUrl"</span>: <span style="color:var(--theme-string)">"//cdn2.scratch.mit.edu/get_image/user/USERNAME_32x32.png"</span>,
        <span style="color:var(--theme-string)">"dateJoined"</span>: <span style="color:var(--theme-string)">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string)">"email"</span>: <span style="color:var(--theme-string)">"EMAIL"</span>

    },
    <span style="color:var(--theme-string)">"permissions"</span>: {
        <span style="color:var(--theme-string)">"admin"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"scratcher"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"new_scratcher"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"invited_scratcher"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"social"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"educator"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"educator_invitee"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"student"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"mute_status"</span>: {}
    },
    <span style="color:var(--theme-string)">"flags"</span>: {
        <span style="color:var(--theme-string)">"must_reset_password"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"must_complete_registration"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"has_outstanding_email_confirmation"</span>: <span style="color:var(--theme-global)">false</span>,
        <span style="color:var(--theme-string)">"show_welcome"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"confirm_email_banner"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"unsupported_browser_banner"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"project_comments_enabled"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"gallery_comments_enabled"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"userprofile_comments_enabled"</span>: <span style="color:var(--theme-global)">true</span>,
        <span style="color:var(--theme-string)">"everything_is_totally_normal"</span>: <span style="color:var(--theme-global)">false</span>
    }
}</div></div></div>`
    },
    "getMessages()": {
        "visible": false,
        "content": `<div>Function that gets the logged-in account's messages.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getMessages</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getMessages</span>(<span style="color: var(--theme-string);">"0"</span>, <span style="color: var(--theme-string);">"1"</span>).<span style="color: var(--theme-function)">then</span>(<span style="color:#000;">x</span>=><span style="color:#000;">x</span>.<span style="color:var(--theme-function);">text</span>().<span style="color:var(--theme-function);">then</span>(<span style="color:#000;">console</span>.<span style="color:var(--theme-function);">log</span>))
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string)">"id"</span>: <span style="color:var(--theme-global)">MESSAGE ID</span>,
        <span style="color:var(--theme-string)">"datetime_created"</span>: <span style="color:var(--theme-string)">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string)">"actor_username"</span>: <span style="color:var(--theme-string)">"USERNAME"</span>,
        <span style="color:var(--theme-string)">"actor_id"</span>: <span style="color:var(--theme-global)">USER ID</span>,
        <span style="color:var(--theme-string)">"type"</span>: <span style="color:var(--theme-string)">"TYPE"</span>
    }
]
//Most messages also have additional keys (like "gallery_id" or "commentee") - you can find the format yourself by running the demo code after receiving a message.</div></div></div>`
    },
    "shareProject()": {
        "visible": false,
        "content": `<div>Function that shares a project owned by the logged-in account.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">shareProject</span>(<span style="color:#000;">projectId</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">shareProject</span>(<span style="color: var(--theme-string);">"123456789"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "unshareProject()": {
        "visible": false,
        "content": `<div>Function that unshares a project owned by the logged-in account.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">unshareProject</span>(<span style="color:#000;">projectId</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">unshareProject</span>(<span style="color: var(--theme-string);">"123456789"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "setAsset()": {
        "visible": false,
        "content": `<div>Function that saves an asset to Scratch.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">setAsset</span>(<span style="color:#000;">file</span>, <span style="color:#000;">extension</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">setAsset</span>(<span style="color: var(--theme-string);">"&#x3C;svg&#x3E;&#x3C;circle cx=&#x22;50&#x22; cy=&#x22;50&#x22; r=&#x22;50&#x22; /&#x3E;&#x3C;/svg&#x3E;"</span>, <span style="color:var(--theme-string)">"svg"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div></div></div>`
    },
    "Self: getActivity()": {
        "visible": false,
        "name": "getActivity()",
        "content": `<div>Function to get the "What's happening" section of the logged-in account's home page.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getActivity</span>(<span style="color:#000;">offset</span>, <span style="color:#000;">limit</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getActivity</span>(<span style="color: var(--theme-string);">"0"</span>, <span style="color:var(--theme-string)">"1"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">ID</span>,
        <span style="color:var(--theme-string);">"datetime_created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
        <span style="color:var(--theme-string);">"actor_username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
        <span style="color:var(--theme-string);">"actor_id"</span>: <span style="color:var(--theme-global);">USER ID</span>,
        <span style="color:var(--theme-string);">"type"</span>: <span style="color:var(--theme-string);">"TYPE"</span>
    }
]
//Most activity also has additional keys (like "project_id" or "gallery_id") - you can find the format yourself by running the demo code.</div></div></div>`
    },
    "getFollowedStudioProjects()": {
        "visible": false,
        "content": `<div>Function to get the new projects in studios followed by the logged-in account.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowedStudioProjects</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getFollowedStudioProjects</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">[
    <button class="docsLink" data-sidebarId="Unknown">Unknown</button>, likely similar to <span class="codeSmall"><button class="docsLink" data-sidebarId="getFollowedUserLoves()">getFollowedUserLoves()</button></span> output
]</div></div></div>`
    },
    "getFollowedUserProjects()": {
        "visible": false,
        "content": `<div>Function to get the projects recently published by users that the logged-in account follows.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowedStudioProjects</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getFollowedUserProjects</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">[
    <button class="docsLink" data-sidebarId="Unknown">Unknown</button>, likely similar to <span class="codeSmall"><button class="docsLink" data-sidebarId="getFollowedUserLoves()">getFollowedUserLoves()</button></span> output
]</div></div></div>`
    },
    "getFollowedUserLoves()": {
        "visible": false,
        "content": `<div>Function to get the projects recently loved by users that the logged-in account follows.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getFollowedUserLoves</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getFollowedUserLoves</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">123456789</span>,
        <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"description"</span>: <span style="color:var(--theme-string);">"DESCRIPTION"</span>,
        <span style="color:var(--theme-string);">"instructions"</span>: <span style="color:var(--theme-string);">"INSTRUCTIONS"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,
        <span style="color:var(--theme-string);">"public"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"comments_allowed"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"is_published"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">97654321</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined</span>": <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
            <span style="color:var(--theme-string);">"profile"</span>: {
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">null</span>,
                <span style="color:var(--theme-string);">"images"</span>: {
                    <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
                }
            }
        },
        <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"images"</span>: {
            <span style="color:var(--theme-string);">"282x218"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"216x163"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"200x200"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"144x108"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"135x102"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"100x80"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"shared"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"stats"</span>: {
            <span style="color:var(--theme-string);">"views"</span>: <span style="color:var(--theme-global);">VIEW COUNT</span>,
            <span style="color:var(--theme-string);">"loves"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>,
            <span style="color:var(--theme-string);">"favorites"</span>: <span style="color:var(--theme-global);">FAVORITE COUNT</span>,
            <span style="color:var(--theme-string);">"remixes"</span>: <span style="color:var(--theme-global);">REMIX COUNT</span>
        },
        <span style="color:var(--theme-string);">"remix"</span>: {
            <span style="color:var(--theme-string);">"parent"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>,
            <span style="color:var(--theme-string);">"root"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>
        },
        <span style="color:var(--theme-string);">"project_token"</span>: <span style="color:var(--theme-string);">"TOKEN"</span>
    }
]</div></div></div>`
    },
    "getRecentProjects()": {
        "visible": false,
        "content": `<div>Function to get the projects recently viewed the logged-in account.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">getRecentProjects</span>(<span style="color:#000">offset</span>, <span style="color:#000">limit</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">getRecentProjects</span>(<span style="color:var(--theme-string);">"0"</span>, <span style="color:var(--theme-string);">"1"</span>)
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">[
    {
        <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">123456789</span>,
        <span style="color:var(--theme-string);">"title"</span>: <span style="color:var(--theme-string);">"TITLE"</span>,
        <span style="color:var(--theme-string);">"description"</span>: <span style="color:var(--theme-string);">"DESCRIPTION"</span>,
        <span style="color:var(--theme-string);">"instructions"</span>: <span style="color:var(--theme-string);">"INSTRUCTIONS"</span>,
        <span style="color:var(--theme-string);">"visibility"</span>: <span style="color:var(--theme-string);">"VISIBILITY"</span>,
        <span style="color:var(--theme-string);">"public"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"comments_allowed"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"is_published"</span>: <span style="color:var(--theme-global);">true</span>,
        <span style="color:var(--theme-string);">"author"</span>: {
            <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">97654321</span>,
            <span style="color:var(--theme-string);">"username"</span>: <span style="color:var(--theme-string);">"USERNAME"</span>,
            <span style="color:var(--theme-string);">"scratchteam"</span>: <span style="color:var(--theme-global);">false</span>,
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"joined</span>": <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
            <span style="color:var(--theme-string);">"profile"</span>: {
                <span style="color:var(--theme-string);">"id"</span>: <span style="color:var(--theme-global);">null</span>,
                <span style="color:var(--theme-string);">"images"</span>: {
                    <span style="color:var(--theme-string);">"90x90"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"60x60"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"55x55"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"50x50"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
                    <span style="color:var(--theme-string);">"32x32"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
                }
            }
        },
        <span style="color:var(--theme-string);">"image"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
        <span style="color:var(--theme-string);">"images"</span>: {
            <span style="color:var(--theme-string);">"282x218"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"216x163"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"200x200"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"144x108"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"135x102"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>,
            <span style="color:var(--theme-string);">"100x80"</span>: <span style="color:var(--theme-string);">"IMAGE URL"</span>
        },
            <span style="color:var(--theme-string);">"history"</span>: {
            <span style="color:var(--theme-string);">"created"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"modified"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>,
            <span style="color:var(--theme-string);">"shared"</span>: <span style="color:var(--theme-string);">"TIMESTAMP"</span>
        },
        <span style="color:var(--theme-string);">"stats"</span>: {
            <span style="color:var(--theme-string);">"views"</span>: <span style="color:var(--theme-global);">VIEW COUNT</span>,
            <span style="color:var(--theme-string);">"loves"</span>: <span style="color:var(--theme-global);">LOVE COUNT</span>,
            <span style="color:var(--theme-string);">"favorites"</span>: <span style="color:var(--theme-global);">FAVORITE COUNT</span>,
            <span style="color:var(--theme-string);">"remixes"</span>: <span style="color:var(--theme-global);">REMIX COUNT</span>
        },
        <span style="color:var(--theme-string);">"remix"</span>: {
            <span style="color:var(--theme-string);">"parent"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>,
            <span style="color:var(--theme-string);">"root"</span>: <span style="color:var(--theme-global);">ID OR NULL</span>
        },
        <span style="color:var(--theme-string);">"project_token"</span>: <span style="color:var(--theme-string);">"TOKEN"</span>
    }
]</div></div></div>`
    },
    "createProject()": {
        "visible": false,
        "content": `<div>Function to create a new project. The optional <span class="codeSmall">data</span> parameter accepts project JSON as an argument.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">createProject</span>()
<span style="color:var(--theme-function);">createProject</span>(<span style="color:#000;">data</span>)</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">createProject</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">{
    <span style="color:var(--theme-string);">"status"</span>: <span style="color:var(--theme-string);">"ok"</span>,
    <span style="color:var(--theme-string);">"content-name"</span>: <span style="color:var(--theme-string);">"PROJECT ID"</span>,
    <span style="color:var(--theme-string);">"content-title"</span>: <span style="color:var(--theme-string);">"HASH"</span>,
    <span style="color:var(--theme-string);">"autosave-interval"</span>: <span style="color:var(--theme-string);">"UNKNOWN NUMBER STRING"</span>
}
</div></div></div>`
    },
    "createStudio()": {
        "visible": false,
        "content": `<span class="docsBanner" style="background: var(--warn-banner)">This function will not work if the session account is of "new Scratcher" status</span><div>Function to create a new studio.<div class="codeDemo"><h3>Syntax</h3><div class="codeDemoContainer"><span style="color:var(--theme-function);">createStudio</span>()</div></div><div class="codeDemo"><h3>Example</h3>
<div class="codeDemoContainer"><span style="color:var(--theme-def);">const</span> <span style="color: var(--theme-function)">Session</span> = <span style="color:var(--theme-function);">require</span>(<span style="color:var(--theme-string)">"javascratch"</span>).<span style="color:var(--theme-function);">Session</span>
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">session</span> = <span style="color:var(--theme-def);">new</span> <span style="color:var(--theme-function);">Session</span>(<span style="color:var(--theme-string)">"USERNAME"</span>, <span style="color:var(--theme-string)">"PASSWORD"</span>)
<span style="color:var(--theme-def);">const</span> <span style="color:#000;">user</span> = <span style="color:var(--theme-def);">new</span> <span style="color:#000;">session</span>.<span style="color: var(--theme-function)">User</span>(<span style="color:var(--theme-string)">"Username"</span>)
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">onReady</span> = () => {
    <span style="color:#000;">user</span>.<span style="color:var(--theme-function);">createStudio</span>()
}
<span style="color:#000;">session</span>.<span style="color:var(--theme-function);">initialize</span>()</div><div class="codeDemoOutput">{
    <span style="color:var(--theme-string);">"redirect"</span>: <span style="color:var(--theme-string);">"/studios/STUDIO ID/"</span>,
    <span style="color:var(--theme-string);">"success"</span>: <span style="color:var(--theme-global);">true</span>
}
</div></div></div>`
    }
}