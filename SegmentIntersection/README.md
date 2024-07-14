# Segment Intersection Formula
```
solve for t, u to get Ix and Iy by lerping between A,B,C,D
Ix: Ax+(Bx-Ax)t = Cx+(Dx-Cx)u
Iy: Ay+(By-Ay)t = Cy+(Dy-Cy)u

first we solve for t (intersection along AB)
Ax+(Bx-Ax)t = Cx+(Dx-Cx)u |-Cx
(Ax-Cx)+(Bx-Ax)t = (Dx-Cx)u

Ay+(By-Ay)t = Cy+(Dy-Cy)u | -Cy
(Ay-Cy)+(By-Ay)t = (Dy-Cy)u | *(Dx-Cx)
(Dx-Cx)[(Ay-Cy)+(By-Ay)t] = (Dx-Cx)(Dy-Cy)u
(Dx-Cx)(Ay-Cy)+(Dx-Cx)(By-Ay)t = (Dx-Cx)u(Dy-Cy)

sub (Dx-Cx)u from previous step into current equation
(Dx-Cx)(Ay-Cy)+(Dx-Cx)(By-Ay)t = ((Ax-Cx)+(Bx-Ax)t)(Dy-Cy)
(Dx-Cx)(Ay-Cy)+(Dx-Cx)(By-Ay)t = (Dy-Cy)(Ax-Cx)+(Dy-Cy)(Bx-Ax)t | -(Dy-Cy)(Ax-Cx)
(Dx-Cx)(Ay-Cy)+(Dx-Cx)(By-Ay)t = (Dy-Cy)(Ax-Cx)+(Dy-Cy)(Bx-Ax)t | -(Dx-Cx)(By-Ay)t

(Dx-Cx)(Ay-Cy)-(Dy-Cy)(Ax-Cx) = (Dy-Cy)(Bx-Ax)t-(Dx-Cx)(By-Ay)t 
(Dx-Cx)(Ay-Cy)-(Dy-Cy)(Ax-Cx) = {(Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay)}t 
(Dx-Cx)(Ay-Cy)-(Dy-Cy)(Ax-Cx) \ (Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay) = t 

tTop   = (Dx-Cx)(Ay-Cy)-(Dy-Cy)(Ax-Cx)
bottom = (Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay)
t = tTop/bottom

now solve for u (intersection along CD)
Ax+(Bx-Ax)t = Cx+(Dx-Cx)u |-Ax
(Bx-Ax)t = (Cx-Ax)+(Dx-Cx)u 

Ay+(By-Ay)t = Cy+(Dy-Cy)u |-Ay
(By-Ay)t = (Cy-Ay)+(Dy-Cy)u |*(Bx-Ax)
(Bx-Ax)(By-Ay)t = (Bx-Ax){(Cy-Ay)+(Dy-Cy)u}
(Bx-Ax)(By-Ay)t = (Bx-Ax)(Cy-Ay)+(Bx-Ax)(Dy-Cy)u

sub in the value of (Bx-Ax)t from previous step
{(Cx-Ax)+(Dx-Cx)u}(By-Ay) = (Bx-Ax)(Cy-Ay)+(Bx-Ax)(Dy-Cy)u
(By-Ay)(Cx-Ax)+(By-Ay)(Dx-Cx)u = (Bx-Ax)(Cy-Ay)+(Bx-Ax)(Dy-Cy)u

(By-Ay)(Cx-Ax)-(Bx-Ax)(Cy-Ay) = (Bx-Ax)(Dy-Cy)u-(By-Ay)(Dx-Cx)u
(By-Ay)(Cx-Ax)-(Bx-Ax)(Cy-Ay) = {(Bx-Ax)(Dy-Cy)-(By-Ay)(Dx-Cx)}u
(By-Ay)(Cx-Ax)-(Bx-Ax)(Cy-Ay)/(Bx-Ax)(Dy-Cy)-(By-Ay)(Dx-Cx) = u

re-arranging to match bottom
(By-Ay)(Cx-Ax)-(Bx-Ax)(Cy-Ay)/(Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay) = u

re-arranging to match radu (uTop)
-1(-By+Ay)(Cx-Ax)-(-1)(-Bx+Ax)(Cy-Ay)/(Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay) = u
(Ax-Bx)(Cy-Ay)-(Ay-By)(Cx-Ax)/(Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay) = u
(Cy-Ay)(Ax-Bx)-(Cx-Ax)(Ay-By)/(Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay) = u

uTop   = (By-Ay)(Cx-Ax)-(Bx-Ax)(Cy-Ay) = (Cy-Ay)(Ax-Bx)-(Cx-Ax)(Ay-By)
bottom = (Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay)
u = uTop/bottom
```