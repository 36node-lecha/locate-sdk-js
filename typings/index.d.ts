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
  getAnt(req: GetAntRequest): Promise<GetAntResponse>;
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
     * 设备类型
     */
    type?: string;
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
    /**
     * RFID 设备号
     */
    no: string;
    /**
     * 天线
     */
    ants?: ({
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
    } & {
      /**
       * 天线编号
       */
      no: number;
    })[];
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
     * 设备类型
     */
    type?: string;
    /**
     * 设备工作状态
     */
    state?: "ON" | "OFF";
  } & {
    /**
     * RFID 设备号
     */
    no: string;
    /**
     * 天线
     */
    ants?: {
      /**
       * 天线编号
       */
      no: number;
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
    }[];
  };
}
export interface CreateRfidResponse {
  /**
   * Rfid device
   */
  body: {
    /**
     * 设备类型
     */
    type?: string;
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
    /**
     * RFID 设备号
     */
    no: string;
    /**
     * 天线
     */
    ants?: ({
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
    } & {
      /**
       * 天线编号
       */
      no: number;
    })[];
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
     * 设备类型
     */
    type?: string;
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
    /**
     * RFID 设备号
     */
    no: string;
    /**
     * 天线
     */
    ants?: ({
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
    } & {
      /**
       * 天线编号
       */
      no: number;
    })[];
  };
}
export interface UpdateRfidRequest {
  rfidIndex: string;
  /**
   * Rfid device Doc
   */
  body: {
    /**
     * 设备类型
     */
    type?: string;
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
     * 设备类型
     */
    type?: string;
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
    /**
     * RFID 设备号
     */
    no: string;
    /**
     * 天线
     */
    ants?: ({
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
    } & {
      /**
       * 天线编号
       */
      no: number;
    })[];
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
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  };
}
export interface CreateAntResponse {
  /**
   * 天线
   */
  body: {
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
  } & {
    /**
     * 天线编号
     */
    no: number;
  };
}
export interface GetAntRequest {
  rfidIndex: string;
  antIndex: string;
}
export interface GetAntResponse {
  /**
   * 天线
   */
  body: {
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
  } & {
    /**
     * 天线编号
     */
    no: number;
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
  } & {
    /**
     * 天线编号
     */
    no: number;
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
    type?: string;
  };
}
export interface ListCamerasResponse {
  body: ({
    /**
     * 设备类型
     */
    type?: "FACE" | "NORMAL";
    /**
     * 相机的名称
     */
    name?: string;
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
  } & {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
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
     * 设备类型
     */
    type?: "FACE" | "NORMAL";
    /**
     * 相机的名称
     */
    name?: string;
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
     * 摄像头设备号 cameraNo
     */
    no: string;
  };
}
export interface CreateCameraResponse {
  /**
   * Camera摄像头
   */
  body: {
    /**
     * 设备类型
     */
    type?: "FACE" | "NORMAL";
    /**
     * 相机的名称
     */
    name?: string;
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
  } & {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
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
     * 设备类型
     */
    type?: "FACE" | "NORMAL";
    /**
     * 相机的名称
     */
    name?: string;
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
  } & {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
  };
}
export interface UpdateCameraRequest {
  cameraIndex: string;
  /**
   * Camera Doc
   */
  body: {
    /**
     * 设备类型
     */
    type?: "FACE" | "NORMAL";
    /**
     * 相机的名称
     */
    name?: string;
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
     * 设备类型
     */
    type?: "FACE" | "NORMAL";
    /**
     * 相机的名称
     */
    name?: string;
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
  } & {
    /**
     * 摄像头设备号 cameraNo
     */
    no: string;
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
  body: ({
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
  } & {
    /**
     * 设备id
     */
    indexCode: string;
  })[];
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
     * 人员姓名
     */
    personName?: string;
    /**
     * 人员类型
     */
    personType?: "POLICE" | "VISITOR" | "SUSPECTOR";
    /**
     * 人脸目标ID
     */
    faceObjectId?: string;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 探测设备
     */
    from?: "Rfid" | "Camera";
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
    locateAt?: Date;
    /**
     * 性别
     */
    gender?: string;
    /**
     * 工号
     */
    worknumber?: string;
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
    EventType?: number;
    /**
     * 设备编号
     */
    DeviceNo?: number;
    /**
     * 预警时间(yyyy-mm-dd hh24:mi:ss)
     */
    DateTime?: string;
    /**
     * 人脸目标id
     */
    FaceObjectID?: number;
    /**
     * 人脸模版ID、临时ID
     */
    FaceFTNo?: number;
    /**
     * 人员姓名
     */
    FaceName?: string;
    /**
     * 警号
     */
    Para1?: string;
    /**
     * 性别 0 女，1 男 2 未知
     */
    Para2?: string;
    /**
     * 0 嫌疑人 1 警察 2 其他
     */
    Para3?: string;
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

export type PersonType = "POLICE" | "VISITOR" | "SUSPECTOR";

export type SourceType = "Rfid" | "Camera";

/**
 * 天线
 */
export interface AntDoc {
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
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
}

/**
 * 天线
 */
export type Ant = {
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
} & {
  /**
   * 天线编号
   */
  no: number;
};

/**
 * Rfid device Doc
 */
export interface RfidDoc {
  /**
   * 设备类型
   */
  type?: string;
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
   * 设备类型
   */
  type?: string;
  /**
   * 设备工作状态
   */
  state?: "ON" | "OFF";
} & {
  /**
   * RFID 设备号
   */
  no: string;
  /**
   * 天线
   */
  ants?: {
    /**
     * 天线编号
     */
    no: number;
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
  }[];
};

/**
 * Rfid device
 */
export type Rfid = {
  /**
   * 设备类型
   */
  type?: string;
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
  /**
   * RFID 设备号
   */
  no: string;
  /**
   * 天线
   */
  ants?: ({
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
  } & {
    /**
     * 天线编号
     */
    no: number;
  })[];
};

/**
 * Camera Doc
 */
export interface CameraDoc {
  /**
   * 设备类型
   */
  type?: "FACE" | "NORMAL";
  /**
   * 相机的名称
   */
  name?: string;
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
   * 设备类型
   */
  type?: "FACE" | "NORMAL";
  /**
   * 相机的名称
   */
  name?: string;
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
   * 摄像头设备号 cameraNo
   */
  no: string;
};

/**
 * Camera摄像头
 */
export type Camera = {
  /**
   * 设备类型
   */
  type?: "FACE" | "NORMAL";
  /**
   * 相机的名称
   */
  name?: string;
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
} & {
  /**
   * 摄像头设备号 cameraNo
   */
  no: string;
};

/**
 * Door Doc
 */
export interface DoorDoc {
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
} & {
  /**
   * 设备id
   */
  indexCode: string;
};

/**
 * Door摄像头
 */
export type Door = {
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
} & {
  /**
   * 设备id
   */
  indexCode: string;
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
   * 人员姓名
   */
  personName?: string;
  /**
   * 人员类型
   */
  personType?: "POLICE" | "VISITOR" | "SUSPECTOR";
  /**
   * 人脸目标ID
   */
  faceObjectId?: string;
  /**
   * 横坐标
   */
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
  /**
   * 探测设备
   */
  from?: "Rfid" | "Camera";
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
  locateAt?: Date;
  /**
   * 性别
   */
  gender?: string;
  /**
   * 工号
   */
  worknumber?: string;
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
   * 人员姓名
   */
  personName?: string;
  /**
   * 人员类型
   */
  personType?: "POLICE" | "VISITOR" | "SUSPECTOR";
  /**
   * 人脸目标ID
   */
  faceObjectId?: string;
  /**
   * 横坐标
   */
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
  /**
   * 探测设备
   */
  from?: "Rfid" | "Camera";
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
  locateAt?: Date;
  /**
   * 性别
   */
  gender?: string;
  /**
   * 工号
   */
  worknumber?: string;
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
  EventType?: number;
  /**
   * 设备编号
   */
  DeviceNo?: number;
  /**
   * 预警时间(yyyy-mm-dd hh24:mi:ss)
   */
  DateTime?: string;
  /**
   * 人脸目标id
   */
  FaceObjectID?: number;
  /**
   * 人脸模版ID、临时ID
   */
  FaceFTNo?: number;
  /**
   * 人员姓名
   */
  FaceName?: string;
  /**
   * 警号
   */
  Para1?: string;
  /**
   * 性别 0 女，1 男 2 未知
   */
  Para2?: string;
  /**
   * 0 嫌疑人 1 警察 2 其他
   */
  Para3?: string;
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
