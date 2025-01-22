# useState
The useState hook is used to add state to functional components. It allows you to store and update values within a component, triggering re-renders when the state changes.

const [state, setState] = useState(initialValue);

state – The current state value.
setState – A function to update the state.
initialValue – The initial state value (can be a number, string, array, object, etc.).

# useEffect
 it allows you to perform side effects in your components.

 examples:
 1.fetching data from API
 2.directly updating the DOM
 3.Timers like setTimeOut and setInterval

 syntax:
useEffect(()=>{
    setTimeout(()=>{
        setCount(count=>count+1)
    },2000)
},[])

[]-it is the empty array of dependecies

 when we use an empty array it will execute the callback function  only for once.otherwise it will continuesly execute the callback function.
 
# useRef

it allow us to create mutable variables,which will not re-render the component.

it is used for accessing DOM element.

