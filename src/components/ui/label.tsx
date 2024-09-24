import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function Label(props: ComponentProps<'label'>) {
  return (
    <label
      {...props}
      htmlFor={props.htmlFor} // Associa o label a um campo de formulário
      className={twMerge(
        'font-medium text-sm tracking-tight leading-normal',
        props.className
      )}
    >
      {props.children}
    </label>
  );
}
