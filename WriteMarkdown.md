# Markdown Blog LaTex format
This tutorial will show you how to integrate LaTex formula in the markdown blog post for several common cases. 

## Inline LaTex formula
The formula inside `$$ $$` will be rendered within the same line of the text.
 ```markdown
 When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$
 ```

## Single LaTex formula
The formula inside `$$ $$` will be rendered seperately and centering on the next line.
```markdown
$$x = -b \pm \sqrt{b^2-4ac} \over 2a.$$
```

## Block LaTex formula

### Important!! 
The **key differences** with the usual LaTex code:
- Replace `//` to `////` for correct rendering. 
- Replace `_` to `/_` for correct rendering.
- Please **avoide addding the space** after a `-` or `+` when you are writing a formula at the beginning of a line. Otherwise, the markdown rendering script will treat it as a itemize signal.
- The whole LaTex Code sould be embraced by a `<p></p>`tag.

Here are some examples for different formula.

### Using `\begin{align} \end{align}`
```markdown
<p>
\begin{align}
\dot{x} & = \sigma(y-x) \\\\
\dot{y} & = \rho x - y - xz \\\\
\dot{z} & = -\beta z + xy 
\end{align}
</p>
```

### Using `\\\[ \\\]`
```markdown
<p>
\\\[
\mathbf{V}_1 \times \mathbf{V}_2 =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\\\
\frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\\\
\frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \\\\
\end{vmatrix}
\\\]
</p>
```