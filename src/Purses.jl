module Purses

using Base: @_inline_meta

export Purse

include("purse.jl")
include("register.jl")
include("registered_functions.jl")
include("math.jl")

end # module
