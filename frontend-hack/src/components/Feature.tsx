import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Zap } from "lucide-react";
import Navbar from "./Navbar";

const Feature = () => {
  return (
    <div className="w-full h-screen bg-zinc-900">
        <Navbar/>
      <Card className="bg-zinc-300">
        <CardHeader>
          <Zap className="w-8 h-8 mb-2" />
          <CardTitle className="text-white">Real-Time Tracking : Detail
                     <h1></h1> 
             </CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  );
};

export default Feature;
