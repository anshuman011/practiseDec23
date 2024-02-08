-everything in js is executed inside an EXECUTION CONTEXT -> 2 components Memory component(variable environment) variable functions(params too ) are stored as key value pair and
code component (thread of execution) code is excecuted one line at a time.
js is syncronous(goes to next line only once present line has been executed) single-threaded(only one command at a time) language.
-when we run a js program an Global EC is created.
	1st phase - memory creation/allocation phase (code has not started executing yet)
	for var it stores undefined (a placeholder)
	for function is stores the whole code as value
	2nd phase - code execution phase
	var initialisation encounter js replaces var value undefined with real value
	function defintions are skipped
	once function invocation is encountered , a new local EC is created with same process 	  (inside the code box imagine)
