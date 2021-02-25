import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextcolor]',
})
export class TextcolorDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.color = 'red';
  }
}

/*
<h1 id="demo">Lorem ipsum dolor sit.</h1>
<script>
  document.getElementById('demo').style.color='red'
</script>
*/
