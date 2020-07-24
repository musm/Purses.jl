var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [Purses]\nOrder = [:function, :type]","category":"page"},{"location":"api/#Purses.cache-Tuple{Any}","page":"API","title":"Purses.cache","text":"cache(x[, idx])\n\nIf x is a Purse, return its cache field, otherwise return an empty tuple.  If the optional argument idx is supplied, return the cache item stored at index idx.\n\nExamples\n\njulia> purse = Purse(1.0, -);\n\njulia> Purses.cache(purse, 1)\n-1.0\n\n\n\n\n\n","category":"method"},{"location":"api/#Purses.register!-Tuple","page":"API","title":"Purses.register!","text":"register!(fs...)\n\nRegister each f in fs as cacheable and return fs.\n\nnote: Note\nIf f is already registered, register will not redefine it.  It is therefore safe to call register with the same functions multiple times, without the risk of method redefinitions.\n\nExamples\n\njulia> purse = Purse(rand(100), Purses.register!(length)...);\n\njulia> length(purse)\n100\n\n\n\n\n\n","category":"method"},{"location":"api/#Purses.value-Tuple{Any}","page":"API","title":"Purses.value","text":"value(x)\n\nIf x is a Purse, return its value field, otherwise return x itself.\n\nExamples\n\njulia> Purses.value(Purse(2.0))\n2.0\n\n\n\n\n\n","category":"method"},{"location":"api/#Purses.AbstractPurse","page":"API","title":"Purses.AbstractPurse","text":"AbstractPurse{T,F<:Tuple}\n\nSupertype for purses (or purse-like types) wrapping a value of type T and caching functions of types F.  To create a subtype which conforms to the AbstractPurse interface, value and cache must be implemented.\n\n\n\n\n\n","category":"type"},{"location":"api/#Purses.Purse","page":"API","title":"Purses.Purse","text":"Purse{T,F<:Tuple,S<:Tuple}\n\nPurse with a value and cache.\n\nFields\n\nvalue::T: the value stored in the purse\ncache::S: the cached values stored as a tuple in the same order as F\n\n\n\n\n\n","category":"type"},{"location":"api/#Purses.Purse-Tuple{Any,Vararg{Any,N} where N}","page":"API","title":"Purses.Purse","text":"Purse(value, fs...)\n\nReturn value wrapped in a Purse.  Each f in fs can be either a callable or a pair a callable and a value.  If f is a callable, the cache will automatically be calculated by applying each f to value.  If f is a pair, the cache for the first element of the pair is set to the value of the second element.\n\nExamples\n\njulia> Purse(1.0)\nPurse{Float64,Tuple{},Tuple{}}(1.0, ())\n\njulia> Purse(2, inv)\nPurse{Int64,Tuple{typeof(inv)},Tuple{Float64}}(2, (0.5,))\n\njulia> Purse(2, inv => 0.2)\nPurse{Int64,Tuple{typeof(inv)},Tuple{Float64}}(2, (0.2,))\n\n\n\n\n\n","category":"method"},{"location":"","page":"-","title":"-","text":"Welcome to the documentation for Purses.jl!","category":"page"},{"location":"","page":"-","title":"-","text":"This document is intended to help you get started with using the package. If you have any suggestions, please open an issue or pull request on GitHub.","category":"page"},{"location":"#Introduction","page":"-","title":"Introduction","text":"","category":"section"},{"location":"","page":"-","title":"-","text":"Purses.jl provides a type for wrapping a value that carries a small pre-computed cache around with it.  This kind of wrapped value is here referred to as a purse, and Purses.jl exports a single implementation of it called Purse.  A purse effectively functions as a named tuple or a struct, except field access is automatically tied to a specific function call.  That is, a purse of a number with a cached value of the square root of that number will automatically retrieve the cached value, when sqrt is called with the purse as argument.  In addition, basic arithmetic operations have been overloaded to automatically unwrap purses which allows them to be used in equations.","category":"page"},{"location":"","page":"-","title":"-","text":"The cache in Purse is stored as a tuple, and the function for caching the entries are saved as a type parameter.  This allows specialising on the function to retrieve the cached value using compile-time constants for indexing into the cache.  To achieve this functionality, @generated methods are used for cacheable functions.  This can put a lot of pressure on the compiler, if many types of purses are used, since it has to compile a new method for every type.  In most usage, however, this should not be an issue.","category":"page"}]
}