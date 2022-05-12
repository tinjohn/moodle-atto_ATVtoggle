# moodle-atto_AVTtoggle
toggles visibility of content for three areas (e.g. Audio,Text,Visual)  
snippets for Poodll Snippet (https://moodle.org/plugins/atto_snippet)

# installation
+ ARIA Version
  - put both .txt files into a snippet directory in your theme directory
 
+ js Version
  + put both .txt files into a snippet directory in your theme directory
  + add js files to your themes javascript directory
  + add a new line of code to yourthemes/config.php to include the js files:
    - To load the js files in your header:
    - $THEME->javascripts = array('hideAVT','invisibleAVT');
    - To load the js files in your footer:
    - $THEME->javascripts_footer = array('hideAVT','invisibleAVT');

# known issues
+ adding h5p content via atto editor might hurt html structure for the current paragraph tag <p>
  + inspect html structure and add p-tag in front of the red /p-tag and add /p-tag to the open p-tag in front of the h5p content   
  
