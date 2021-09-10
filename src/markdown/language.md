# <div><i className="fab fa-js-square" style="color:#fcdc00;"></i> JavaScript</div> 
#### JavaScript is the world's most popular programming language.
#### JavaScript is the programming language of the Web.</br>
## Simple examples

- #### Part 1
<div style="color:rgb(0, 128, 0)">

``` js
    var name="John"
    console.log(name)

    //John
```
</div>

</br>

- #### Part 2
<div style="color:rgb(0, 128, 0)">

```js
    var name ="John"
    function Display(text){
        return text
    }
    console.log(Display(name))
    //John
```
</div>

- #### Part 3
<div style="color:rgb(0, 128, 0)">

```js
    var name="John"
    class Display{
        constructor(text){
            this.text=text
        }
        operation1(){
            return this.text
        }
        operation2(){
            return this.text+1
        }
        operation3(){
            return this.text+"and steve"
        }
        get operation4(){
            return  this.text
        }
        set operation5(value){
            return this.text+value
        }
    }
    var person=Display(name)
    console.log(person.operation1())
    console.log(person.operation2())
    console.log(person.operation3())
    console.log(person.operation4)
    person.operation5="hack"
    console.log(person.operation5)

```
</div>

---

</br>

# <i className="fab fa-python"></i> Python
#### Python is an interpreted high-level general-purpose programming language. 
#### Its design philosophy emphasizes code readability with its use of significant indentation. 
#### Its language constructs as well as its object-oriented approach aim to help programmers write clear, 
#### logical code for small and large-scale projects.
#### *Guido van Rossum began working on Python in the late 1980* 
#### *as a successor to the ABC programming language, and first released it in 1991 as Python 0.9.0.*
## Simple examples

- #### Part 1
<div style="color:rgb(0, 128, 0)">

```py
    name="john"
    print(name)
```
</div>

- #### Part 2
<div style="color:rgb(0, 128, 0)">

```py
    name="John"
    def Display(text):
        return text
    print(Display(name))
```
</div>

- #### Part 3
<div style="color:rgb(0, 128, 0)">

```py
    name="John"
    class Display():
        def __init__(self,text):
            self.text=text
        def operation1(self):
            return self.text
        def operation2(self,value):
            return self.text+value
        @classmethod
        def operation3(cls,value):
            return cls(value)
        @staticmethod
        def operation4(value):
            return value
    perosn=Display(name)
    print(person.operation1())
    print(person.operation2("and Steve"))
    print(person.operation3("Wolker"))
    print(person.operation4("Robert"))

```
</div>

---
# <i className="fab fa-php"></i> Php
#### PHP is a general-purpose scripting language geared towards web development.
#### *It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.*
#### The PHP reference implementation is now produced by The PHP Group.
#### PHP originally stood for Personal Home Page,
#### but it now stands for the recursive initialism PHP: Hypertext Preprocessor.
## Simple examples

- ## Part 1
<div style="color:rgb(0, 128, 0)">

```php
    $name="John"
    echo $name
    print $name

```
</div>

- ## Part 2
<div style="color:rgb(0, 128, 0)">

```php
    $name="John"
    function Display($text){
        return $text
    }
    print Display($name)

```
</div>

- ## Part 3
<div style="color:rgb(0, 128, 0)">

```php
    $name="John"
    class Display{
        public $text
        function __construct($text){
            $this->text=$text
        }
        function operation1(){
            return $this->text
        }
        function operation2($value){
            return $value
        }

    }
    $person= new Display($name)
    echo $person->operation1()
    print $person->operation2("Steve")
```
</div>
</br>
