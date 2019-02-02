uri-parser - Module for URI parsing
==========

### Overview

URI-Parser is a module that provides functions for parsing URI (Uniform Resource Identifier) that is loosly 
based upon the standard `url` module within `node`.  Parsing is derived from the **excellent** `parseUri` 
function by [Steven Levithan](http://stevenlevithan.com).

Although the URI-parser takes care of most URI specifications it is **not fully compliant with the RFC-3986 
specification**. For a more complete and fully compliant implemnentation I recommend you take a look at 
the [URI Type for javascript](https://github.com/webr3/URI) module.

#### What's an URI?

The best place to start if you want to know more about URIs is (of course) the wikipedia article on
[Uniform Resource Identifiers](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier).

Once you have been there, and are suitably confused, go take a look at Steve Leviathan's test page for 
his [`parseUri`](http://stevenlevithan.com/demo/parseuri/js/) function that used is within this module to 
do all of the hard work.

### Installation
	npm install uri-parser

### Using the Module
The 'uri-parser' module is accessed in the standard way by calling `require("uri-parser");` and once loaded 
you have access to the following objects and functions.

#### Class `uri-parser.Parser`
The `Parser` class is a wrapper object class that provides access to an object that can be 
used to parse `uri` instances.

This class has the following interface:

##### Constructor `Parser(options)`
Creates a new instance with the specified options

##### Method `Parser.parse(uriStr, strictMode)`
Parses an URI into components (optionally in *strict* mode)

##### Method `Parser.complete(obj)`
Creates a *complete* URI definition from its components

##### Method `Parser.format(obj)`
Formats an URI definition into a well-formed URI string

#### Function `uri-parser.parse`
The `parse` function is a proxy to the `Parser.parse(uriStr, strictMode)` method on a singleton `Parser`
instance that is created for the module.

#### Function `uri-parser.complete`
The `complete` function is a proxy to the `Parser.complete(obj)` method on a singleton `Parser`
instance that is created for the module.

#### Function `uri-parser.format`
The `format` function is a proxy to the `Parser.format(obj)` method on a singleton `Parser`
instance that is created for the module.

### Contributors
- [Stuart Hudson](https://github.com/goulash1971)

### License
MIT License

### Acknowledgements
- [Steven Levithan](http://stevenlevithan.com) for the `parseUri` function that is the core of this module

---
### Author
Stuart Hudson		 

