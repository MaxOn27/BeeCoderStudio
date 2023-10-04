import React from 'react';

import './article.css'

const Article = () => {
  return (
    <div className="article-wrapper">
      <h1>Cross-Site Scripting (XSS)</h1>
      <span className="text-justify indent-8">
        Description: XSS is a vulnerability that occurs when an attacker injects malicious scripts (usually JavaScript) into web pages viewed by other users. These scripts execute in the context of the victim's browser, potentially stealing data, session cookies, or performing other malicious actions on behalf of the victim.

Attack Vector: Attackers typically inject malicious scripts through user inputs (e.g., form fields, URL parameters, or cookies) that are not properly sanitized or validated by the application. The malicious code is then executed when other users view the affected page.

Types of XSS:

Stored (Persistent) XSS: Malicious scripts are permanently stored on the server and served to other users who view the affected page.
Reflected (Non-Persistent) XSS: Malicious scripts are not stored on the server but are included in a URL or input field. They are reflected off a web server and executed when the victim clicks on a malicious link.
Prevention: To prevent XSS, applications should:

Sanitize and validate user inputs.
Encode user-generated content before rendering it in HTML contexts.
Implement Content Security Policy (CSP) headers to restrict the sources of executable scripts.
Educate developers about secure coding practices.
      </span>
    </div>
  );
};

export default Article;