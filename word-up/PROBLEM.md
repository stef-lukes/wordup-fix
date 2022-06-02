# Problem

Once the form submits it resets the `isToggled` state of the `lettersArr` but not of the individual `Letter` components `isToggled` state.

This causes a conflict between the state of the entire array and the hook on the individual Letter component.
