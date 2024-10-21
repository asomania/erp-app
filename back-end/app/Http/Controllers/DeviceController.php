<?php

namespace App\Http\Controllers;

    use App\Models\Device;
    use Illuminate\Http\Request;

class DeviceController extends Controller
{

    /**
     * Display a listing of the devices.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $devices = Device::all();
        // Log devices to console for debugging
        \Log::info('Devices:', $devices->toArray());
         return response()->json($devices);
    }

    /**
     * Store a newly created device in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $device = Device::create($request->all());
        return response()->json($device, 201);
    }

    /**
     * Display the specified device.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $device = Device::findOrFail($id);
        return response()->json($device);
    }

    /**
     * Update the specified device in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $device = Device::findOrFail($id);
        $device->update($request->all());
        return response()->json($device);
    }

    /**
     * Remove the specified device from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $device = Device::findOrFail($id);
        $device->delete();
        return response()->json(null, 204);
    }
}
