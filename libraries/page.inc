<?php
/**
  **********************
 ***IGNORE THIS FILE***
*********************
*/
class Page
{
    private $title;
    private $stylesheets = array();
    private $javascripts = array();
    private $body;
    private $script;
    
    function __contstruct(){
        
    }
        
    function set_title($title)
    {
        $this->title = $title;
    }
    
    function add_css($path)
    {
        $this->stylesheets[] = $path;
    }
    
    function add_javascript($path)
    {
        $this->javascripts[] = $path;
    }
    
    function start_body()
    {
        ob_start();
    }

    function end_body()
    {
        $this->body = ob_get_clean();
    }
    
     function start_script()
    {
        ob_start();
    }

    function end_script()
    {
        $this->script = ob_get_clean();
    }

    function render($path)
    {
        ob_start();
        include($path);
        return ob_get_clean();
    }
}