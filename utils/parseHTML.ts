export const decodeHTML = (str) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

/**
 * Encode the HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
export const encodeHTML = (str) => {
  return str
    .replace(/data:/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/[^\w-_. ]/gi, function (c) {
      return `&#${c.charCodeAt(0)};`;
    });
};
