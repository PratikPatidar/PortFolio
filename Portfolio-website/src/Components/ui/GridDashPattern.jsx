"use client"

import { cn } from "../../lib/utils"
import GridPattern from "../ui/gridPattern"

export function GridPatternDashed({ children }) {
          return (
                    <div className="relative bg-foreground">
                              {children}
                              <GridPattern
                                        width={30}
                                        height={30}
                                        x={-1}
                                        y={-1}
                                        strokeDasharray={"4 2"}
                                        className={cn(
                                                  "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                                        )}
                              />
                    </div>
          )
}
