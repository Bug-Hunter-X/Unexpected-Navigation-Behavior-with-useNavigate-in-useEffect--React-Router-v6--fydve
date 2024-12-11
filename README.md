# React Router v6 useNavigate Hook Issue in useEffect

This repository demonstrates a potential issue when using the `useNavigate` hook from `react-router-dom@6` within a `useEffect` hook that only runs once (typically during component mount).  If the navigation depends on asynchronous operations, the navigation might occur after the component unmounts, leading to errors or unexpected behavior.

The `useEffectBug.js` file shows the problematic code.  The `useEffectSolution.js` file provides a solution using a cleanup function to prevent navigation after unmount.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console output and the application behavior.

## Solution

The solution uses the cleanup function in the `useEffect` hook. This function is called before the component unmounts, allowing us to cancel any pending navigation requests preventing the 'Can't perform a React state update on an unmounted component' error.