declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  rfid: RfidAPI;
  camera: CameraAPI;
  door: DoorAPI;
  target: TargetAPI;
  aics: AicsAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface RfidAPI {
  /**
   * List rfid devices
   */
  listRfids(req: ListRfidsRequest): Promise<ListRfidsResponse>;
  /**
   * Create a rfid
   */
  createRfid(req: CreateRfidRequest): Promise<CreateRfidResponse>;
  /**
   * Find rfid device by index
   */
  getRfid(req: GetRfidRequest): Promise<GetRfidResponse>;
  /**
   * Update rfid device
   */
  updateRfid(req: UpdateRfidRequest): Promise<UpdateRfidResponse>;
  /**
   * Delete rfid device
   */
  deleteRfid(req: DeleteRfidRequest): Promise<void>;
  /**
   * Create an ant in the rfid
   */
  createAnt(req: CreateAntRequest): Promise<CreateAntResponse>;
  /**
   * Find ant device of the rfid by index
   */
  getRAnt(req: GetRAntRequest): Promise<GetRAntResponse>;
  /**
   * Update ant device of the rfid
   */
  updateAnt(req: UpdateAntRequest): Promise<UpdateAntResponse>;
  /**
   * Delete ant device of the rfid
   */
  deleteAnt(req: DeleteAntRequest): Promise<void>;
}
export interface CameraAPI {
  /**
   * List cameras
   */
  listCameras(req: ListCamerasRequest): Promise<ListCamerasResponse>;
  /**
   * Create a camera
   */
  createCamera(req: CreateCameraRequest): Promise<CreateCameraResponse>;
  /**
   * Find camera by index
   */
  getCamera(req: GetCameraRequest): Promise<GetCameraResponse>;
  /**
   * Update camera
   */
  updateCamera(req: UpdateCameraRequest): Promise<UpdateCameraResponse>;
  /**
   * Delete camera
   */
  deleteCamera(req: DeleteCameraRequest): Promise<void>;
}
export interface DoorAPI {
  /**
   * List doors
   */
  listDoors(req: ListDoorsRequest): Promise<ListDoorsResponse>;
}
export interface TargetAPI {
  /**
   * List targets
   */
  listTargets(req: ListTargetsRequest): Promise<ListTargetsResponse>;
}
export interface AicsAPI {
  /**
   * post an event from aics
   */
  postEvent(req: PostEventRequest): Promise<void>;
}

export interface ListRfidsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
  };
}
export interface ListRfidsResponse {
  body: ({
    /**
     * 设备号 deviceNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 天线
     */
    ants?: {
      /**
       * 天线编号
       */
      no?: number;
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
    }[];
    /**
     * 设备工作状态
     */
    state?: "ON" | "OFF";
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 心跳时间
     */
    heartbeatAt?: Date;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateRfidRequest {
  /**
   * Rfid device创建文档
   */
  body: {
    /**
     * 设备号 deviceNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 天线
     */
    ants?: {
      /**
       * 天线编号
       */
      no?: number;
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
    }[];
    /**
     * 设备工作状态
     */
    state?: "ON" | "OFF";
  };
}
export interface CreateRfidResponse {
  /**
   * Rfid device
   */
  body: {
    /**
     * 设备号 deviceNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 天线
     */
    ants?: {
      /**
       * 天线编号
       */
      no?: number;
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
    }[];
    /**
     * 设备工作状态
     */
    state?: "ON" | "OFF";
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 心跳时间
     */
    heartbeatAt?: Date;
  };
}
export interface GetRfidRequest {
  rfidIndex: string;
}
export interface GetRfidResponse {
  /**
   * Rfid device
   */
  body: {
    /**
     * 设备号 deviceNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 天线
     */
    ants?: {
      /**
       * 天线编号
       */
      no?: number;
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
    }[];
    /**
     * 设备工作状态
     */
    state?: "ON" | "OFF";
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 心跳时间
     */
    heartbeatAt?: Date;
  };
}
export interface UpdateRfidRequest {
  rfidIndex: string;
  /**
   * Rfid device Doc
   */
  body: {
    /**
     * 设备号 deviceNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 天线
     */
    ants?: {
      /**
       * 天线编号
       */
      no?: number;
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
    }[];
    /**
     * 设备工作状态
     */
    state?: "ON" | "OFF";
  };
}
export interface UpdateRfidResponse {
  /**
   * Rfid device
   */
  body: {
    /**
     * 设备号 deviceNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 天线
     */
    ants?: {
      /**
       * 天线编号
       */
      no?: number;
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
    }[];
    /**
     * 设备工作状态
     */
    state?: "ON" | "OFF";
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 心跳时间
     */
    heartbeatAt?: Date;
  };
}
export interface DeleteRfidRequest {
  rfidIndex: string;
}
export interface CreateAntRequest {
  rfidIndex: string;
  /**
   * 天线
   */
  body: {
    /**
     * 天线编号
     */
    no: number;
    /**
     * 横坐标
     */
    x: number;
    /**
     * 纵坐标
     */
    y: number;
  };
}
export interface CreateAntResponse {
  /**
   * 天线
   */
  body: {
    /**
     * 天线编号
     */
    no?: number;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetRAntRequest {
  rfidIndex: string;
  antIndex: string;
}
export interface GetRAntResponse {
  /**
   * 天线
   */
  body: {
    /**
     * 天线编号
     */
    no?: number;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateAntRequest {
  rfidIndex: string;
  antIndex: string;
  /**
   * 天线
   */
  body: {
    /**
     * 天线编号
     */
    no?: number;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  };
}
export interface UpdateAntResponse {
  /**
   * 天线
   */
  body: {
    /**
     * 天线编号
     */
    no?: number;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteAntRequest {
  rfidIndex: string;
  antIndex: string;
}
export interface ListCamerasRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
  };
}
export interface ListCamerasResponse {
  body: ({
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 绑定的rfid设备
     */
    bindRfid?: {
      /**
       * rfid设备号 deviceNo
       */
      device: string;
      /**
       * 天线号
       */
      ant: number;
    };
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateCameraRequest {
  /**
   * Camera摄像头创建文档
   */
  body: {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 绑定的rfid设备
     */
    bindRfid?: {
      /**
       * rfid设备号 deviceNo
       */
      device: string;
      /**
       * 天线号
       */
      ant: number;
    };
  };
}
export interface CreateCameraResponse {
  /**
   * Camera摄像头
   */
  body: {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 绑定的rfid设备
     */
    bindRfid?: {
      /**
       * rfid设备号 deviceNo
       */
      device: string;
      /**
       * 天线号
       */
      ant: number;
    };
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetCameraRequest {
  cameraIndex: string;
}
export interface GetCameraResponse {
  /**
   * Camera摄像头
   */
  body: {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 绑定的rfid设备
     */
    bindRfid?: {
      /**
       * rfid设备号 deviceNo
       */
      device: string;
      /**
       * 天线号
       */
      ant: number;
    };
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateCameraRequest {
  cameraIndex: string;
  /**
   * Camera Doc
   */
  body: {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 绑定的rfid设备
     */
    bindRfid?: {
      /**
       * rfid设备号 deviceNo
       */
      device: string;
      /**
       * 天线号
       */
      ant: number;
    };
  };
}
export interface UpdateCameraResponse {
  /**
   * Camera摄像头
   */
  body: {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
    /**
     * 设备类型
     */
    type?: string;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 绑定的rfid设备
     */
    bindRfid?: {
      /**
       * rfid设备号 deviceNo
       */
      device: string;
      /**
       * 天线号
       */
      ant: number;
    };
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteCameraRequest {
  cameraIndex: string;
}
export interface ListDoorsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
  };
}
export interface ListDoorsResponse {
  body: {
    /**
     * 设备id
     */
    indexCode: string;
    /**
     * 通道类型
     */
    channelType?: string;
    /**
     * 编号
     */
    doorNo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属区域
     */
    regionName?: string;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface ListTargetsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    from?: string[];
    label?: string[];
    person?: string[];
  };
}
export interface ListTargetsResponse {
  body: ({
    /**
     * 标签id
     */
    label?: string;
    /**
     * 人员id
     */
    person?: string;
    /**
     * 人员类型
     */
    personType?: "Staff" | "Visitor";
    /**
     * 人脸目标ID
     */
    faceObjectId?: string;
    /**
     * 横坐标
     */
    x: number;
    /**
     * 纵坐标
     */
    y: number;
    /**
     * 探测设备
     */
    from: "Rfid" | "Camera";
    /**
     * 摄像头设备号 cameraNo
     */
    camera?: string;
    /**
     * rfid设备号 deviceNo
     */
    device?: string;
    /**
     * 天线设备号 antNo
     */
    ant?: number;
    /**
     * 坐标探测时间
     */
    locateAt: Date;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 坐标过期时间
     */
    expireAt?: Date;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface PostEventRequest {
  /**
   * Aics event 内容
   */
  body: {
    /**
     * 事件名称
     */
    EventName?: string;
    /**
     * 事件类型
     */
    EventType: number;
    /**
     * 设备编号
     */
    DeviceNo: number;
    /**
     * 预警时间(yyyy-mm-dd hh24:mi:ss)
     */
    DateTime: string;
    /**
     * 人脸目标id
     */
    FaceObjectID?: number;
    /**
     * 人脸模版ID、临时ID
     */
    FaceFTNo?: number;
  };
}
export type DateTime = Date;

/**
 * mongodb id
 */
export type MongoId = string;

export interface AnyValue {
  [k: string]: any;
}

export type RfidState = "ON" | "OFF";

export type Coordinate = number;

export type PersonType = "Staff" | "Visitor";

export type SourceType = "Rfid" | "Camera";

/**
 * 天线
 */
export interface AntDoc {
  /**
   * 天线编号
   */
  no?: number;
  /**
   * 横坐标
   */
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
}

/**
 * 天线
 */
export interface AntCreateDoc {
  /**
   * 天线编号
   */
  no: number;
  /**
   * 横坐标
   */
  x: number;
  /**
   * 纵坐标
   */
  y: number;
}

/**
 * 天线
 */
export type Ant = {
  /**
   * 天线编号
   */
  no?: number;
  /**
   * 横坐标
   */
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * Rfid device Doc
 */
export interface RfidDoc {
  /**
   * 设备号 deviceNo
   */
  no: string;
  /**
   * 设备类型
   */
  type?: string;
  /**
   * 天线
   */
  ants?: {
    /**
     * 天线编号
     */
    no?: number;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  }[];
  /**
   * 设备工作状态
   */
  state?: "ON" | "OFF";
}

/**
 * Rfid device创建文档
 */
export type RfidCreateDoc = {
  /**
   * 设备号 deviceNo
   */
  no: string;
  /**
   * 设备类型
   */
  type?: string;
  /**
   * 天线
   */
  ants?: {
    /**
     * 天线编号
     */
    no?: number;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  }[];
  /**
   * 设备工作状态
   */
  state?: "ON" | "OFF";
};

/**
 * Rfid device
 */
export type Rfid = {
  /**
   * 设备号 deviceNo
   */
  no: string;
  /**
   * 设备类型
   */
  type?: string;
  /**
   * 天线
   */
  ants?: {
    /**
     * 天线编号
     */
    no?: number;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  }[];
  /**
   * 设备工作状态
   */
  state?: "ON" | "OFF";
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 心跳时间
   */
  heartbeatAt?: Date;
};

/**
 * Camera Doc
 */
export interface CameraDoc {
  /**
   * 摄像头设备号 cameraNo
   */
  no: string;
  /**
   * 设备类型
   */
  type?: string;
  /**
   * 横坐标
   */
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
  /**
   * 绑定的rfid设备
   */
  bindRfid?: {
    /**
     * rfid设备号 deviceNo
     */
    device: string;
    /**
     * 天线号
     */
    ant: number;
  };
}

/**
 * Camera摄像头创建文档
 */
export type CameraCreateDoc = {
  /**
   * 摄像头设备号 cameraNo
   */
  no: string;
  /**
   * 设备类型
   */
  type?: string;
  /**
   * 横坐标
   */
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
  /**
   * 绑定的rfid设备
   */
  bindRfid?: {
    /**
     * rfid设备号 deviceNo
     */
    device: string;
    /**
     * 天线号
     */
    ant: number;
  };
};

/**
 * Camera摄像头
 */
export type Camera = {
  /**
   * 摄像头设备号 cameraNo
   */
  no: string;
  /**
   * 设备类型
   */
  type?: string;
  /**
   * 横坐标
   */
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
  /**
   * 绑定的rfid设备
   */
  bindRfid?: {
    /**
     * rfid设备号 deviceNo
     */
    device: string;
    /**
     * 天线号
     */
    ant: number;
  };
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * Door Doc
 */
export interface DoorDoc {
  /**
   * 设备id
   */
  indexCode: string;
  /**
   * 通道类型
   */
  channelType?: string;
  /**
   * 编号
   */
  doorNo?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 所属区域
   */
  regionName?: string;
}

/**
 * Door摄像头创建文档
 */
export type DoorCreateDoc = {
  /**
   * 设备id
   */
  indexCode: string;
  /**
   * 通道类型
   */
  channelType?: string;
  /**
   * 编号
   */
  doorNo?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 所属区域
   */
  regionName?: string;
};

/**
 * Door摄像头
 */
export type Door = {
  /**
   * 设备id
   */
  indexCode: string;
  /**
   * 通道类型
   */
  channelType?: string;
  /**
   * 编号
   */
  doorNo?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 所属区域
   */
  regionName?: string;
};

/**
 * Target Doc
 */
export interface TargetDoc {
  /**
   * 标签id
   */
  label?: string;
  /**
   * 人员id
   */
  person?: string;
  /**
   * 人员类型
   */
  personType?: "Staff" | "Visitor";
  /**
   * 人脸目标ID
   */
  faceObjectId?: string;
  /**
   * 横坐标
   */
  x: number;
  /**
   * 纵坐标
   */
  y: number;
  /**
   * 探测设备
   */
  from: "Rfid" | "Camera";
  /**
   * 摄像头设备号 cameraNo
   */
  camera?: string;
  /**
   * rfid设备号 deviceNo
   */
  device?: string;
  /**
   * 天线设备号 antNo
   */
  ant?: number;
  /**
   * 坐标探测时间
   */
  locateAt: Date;
}

/**
 * 目标信息
 */
export type Target = {
  /**
   * 标签id
   */
  label?: string;
  /**
   * 人员id
   */
  person?: string;
  /**
   * 人员类型
   */
  personType?: "Staff" | "Visitor";
  /**
   * 人脸目标ID
   */
  faceObjectId?: string;
  /**
   * 横坐标
   */
  x: number;
  /**
   * 纵坐标
   */
  y: number;
  /**
   * 探测设备
   */
  from: "Rfid" | "Camera";
  /**
   * 摄像头设备号 cameraNo
   */
  camera?: string;
  /**
   * rfid设备号 deviceNo
   */
  device?: string;
  /**
   * 天线设备号 antNo
   */
  ant?: number;
  /**
   * 坐标探测时间
   */
  locateAt: Date;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 坐标过期时间
   */
  expireAt?: Date;
};

/**
 * Aics event 内容
 */
export interface AicsEventDoc {
  /**
   * 事件名称
   */
  EventName?: string;
  /**
   * 事件类型
   */
  EventType: number;
  /**
   * 设备编号
   */
  DeviceNo: number;
  /**
   * 预警时间(yyyy-mm-dd hh24:mi:ss)
   */
  DateTime: string;
  /**
   * 人脸目标id
   */
  FaceObjectID?: number;
  /**
   * 人脸模版ID、临时ID
   */
  FaceFTNo?: number;
}

export interface MongoDefault {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
