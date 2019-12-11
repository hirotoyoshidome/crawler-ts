import * as request from 'request-promise-native';
import * as chardet from 'chardet';
import * as iconv   from 'iconv-lite';
import { JSDOM }    from 'jsdom';

const main = async () => {
  const url: string = 'https://google.com';

  const option = {
    url: url,
    encoding: null
  };

  const response = await request.get(option);

  // char code
  const encoding = chardet.detect(response)!.toString();
  if(!encoding) throw new Error();

  // trans char code
  const html: string = iconv.decode(response, encoding);

  // parse
  const jsdom = new JSDOM(html);
  const document = jsdom.window.document;

  // print title
  console.log(document.title);

};
main();