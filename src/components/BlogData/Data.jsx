import React from "react";

let SingleBlogContent = {
    TitleText: "React-Redux vs smaller libraries",
    InitialText:"Below are my thoughts on React-Redux",
    TitleImage:require("../../assets/img/bg8bit.gif"),
    TeaserText : " Can you accomplish what you need with Redux with a small &lt; 1k library:",
    Paragraphs : [(<pre><code>
                {`AddChangeEventWithObject({Image2Seen:
                (Data,State)=>
                    {
                        if(State && State.ShouldSetSetState)
                        {
                            this.setState(Data);
                        }
                    }
                })`};
            </code></pre>)],
    Conclusion: " For 99% of cases I've seen the answer is a resounding  YES, PLEASE!"
}

export default [SingleBlogContent];
