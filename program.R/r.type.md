R 语言 - 数据类型
===

与其他编程语言（如 C 中的 C 和 java）相反，变量不会声明为某种数据类型。 变量分配有 R 对象，R 对象的数据类型变为变量的数据类型。

常用的 R 对象有：

* 矢量
* 列表
* 矩阵
* 数组
* 因子
* 数据帧

这些对象中最简单的是向量对象，并且这些原子向量有六种数据类型，也称为六类向量。 其他R对象建立在原子向量之上。

| 数据类型 | 例 | 校验 |
| --- | --- | --- |
| Logical（逻辑型） | TRUE, FALSE | <pre>v <- TRUE<br>print(class(v))</pre>它产生以下结果 - <pre>[1] "logical"</pre> |
| Numeric（数字） | 12.3，5，999 | <pre>v <- 23.5<br>print(class(v))</pre>它产生以下结果 - <pre>[1] "numeric"</pre> |
| Integer（整型） | 2L，34L，0L | <pre>v <- 2L<br>print(class(v))</pre>它产生以下结果 - <pre>[1] "integer"</pre> |
| Complex（复合型） | 3 + 2i | <pre>v <- 2+5i<br>print(class(v))</pre>它产生以下结果 - <pre>[1] "complex"</pre> |
| Character（字符） | 'a' , '"good", "TRUE", '23.4' | <pre>v <- "TRUE"<br>print(class(v))</pre>它产生以下结果 - <pre>[1] "character"</pre> |
| Raw（原型） | "Hello" 被存储为 48 65 6c 6c 6f | <pre>v <- charToRaw("Hello")<br>print(class(v))</pre>它产生以下结果 - <pre>[1] "raw"</pre> |

在 R 编程中，非常基本的数据类型是称为向量的 R 对象，其保存如上所示的不同类的元素。


### Vectors 向量
当你想用多个元素创建向量时，你应该使用c()函数，这意味着将元素组合成一个向量。
```r
# Create a vector.
apple <- c('red','green',"yellow")
print(apple)

# Get the class of the vector.
print(class(apple))
```

当我们执行上面的代码，它产生以下结果
```r
[1] "red"    "green"  "yellow"
[1] "character"
```


### Lists 列表
列表是一个R对象，它可以在其中包含许多不同类型的元素，如向量，函数甚至其中的另一个列表。
```r
# Create a list.
list1 <- list(c(2,5,3),21.3,sin)

# Print the list.
print(list1)
```

当我们执行上面的代码，它产生以下结果
```r
[[1]]
[1] 2 5 3

[[2]]
[1] 21.3

[[3]]
function (x)  .Primitive("sin")
```


### Matrices 矩阵
矩阵是二维矩形数据集。 它可以使用矩阵函数的向量输入创建。
```r
# Create a matrix.
M = matrix( c('a','a','b','c','b','a'), nrow = 2, ncol = 3, byrow = TRUE)
print(M)
```

当我们执行上面的代码，它产生以下结果
```r
     [,1] [,2] [,3]
[1,] "a"  "a"  "b"
[2,] "c"  "b"  "a"
```


### Arrays 数组
虽然矩阵被限制为二维，但阵列可以具有任何数量的维度。 数组函数使用一个dim属性创建所需的维数。 在下面的例子中，我们创建了一个包含两个元素的数组，每个元素为3x3个矩阵。
```r
# Create an array.
a <- array(c('green','yellow'),dim = c(3,3,2))
print(a)
```

当我们执行上面的代码，它产生以下结果
```r
, , 1

     [,1]     [,2]     [,3]
[1,] "green"  "yellow" "green"
[2,] "yellow" "green"  "yellow"
[3,] "green"  "yellow" "green"

, , 2

     [,1]     [,2]     [,3]
[1,] "yellow" "green"  "yellow"
[2,] "green"  "yellow" "green"
[3,] "yellow" "green"  "yellow"
```


### Factors 因子
因子是使用向量创建的r对象。 它将向量与向量中元素的不同值一起存储为标签。 标签总是字符，不管它在输入向量中是数字还是字符或布尔等。 它们在统计建模中非常有用。
使用factor()函数创建因子。nlevels函数给出级别计数。
```r
# Create a vector.
apple_colors <- c('green','green','yellow','red','red','red','green')

# Create a factor object.
factor_apple <- factor(apple_colors)

# Print the factor.
print(factor_apple)
print(nlevels(factor_apple))
```

当我们执行上面的代码，它产生以下结果
```r
[1] green  green  yellow red    red    red    yellow green
Levels: green red yellow
# applying the nlevels function we can know the number of distinct values
[1] 3
```


### Data Frames 数据帧
数据帧是表格数据对象。 与数据帧中的矩阵不同，每列可以包含不同的数据模式。 第一列可以是数字，而第二列可以是字符，第三列可以是逻辑的。 它是等长度的向量的列表。

使用data.frame()函数创建数据帧。
```r
# Create the data frame.
BMI <- 	data.frame(
   gender = c("Male", "Male","Female"),
   height = c(152, 171.5, 165),
   weight = c(81,93, 78),
   Age = c(42,38,26)
)
print(BMI)
```

当我们执行上面的代码，它产生以下结果
```r
  gender height weight Age
1   Male  152.0     81  42
2   Male  171.5     93  38
3 Female  165.0     78  26
```
